import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/button'
import { RoomCode } from '../components/RoomCode'
import '../styles/room.scss'
import {useParams} from 'react-router-dom'
import { useState, FormEvent, useEffect} from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { Question } from '../components/Question'


type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    IsAnswered: boolean;
    IsHighlighted: boolean;

}>

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    IsAnswered: boolean;
    IsHighlighted: boolean;

}

type RoomParams = {
    id: string
}

export function Room() {

    const {user} = useAuth()

    const params = useParams<RoomParams>()
    const [newQuestion, setNewQuestion] = useState("")
    const [questions, setQuestions] = useState<Question[]>([])
    const [title, setTitle] = useState("")

    const roomId = params.id

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`)

        roomRef.on('value', room => {
            const databaseRoom = room.val()
            const firebaseQuestions: FirebaseQuestions =  databaseRoom.questions ?? {}

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return{
                    id: key,
                    author: value.author,
                    content: value.content,
                    IsAnswered: value.IsAnswered,
                    IsHighlighted: value.IsHighlighted,
                }
            })
            
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })
    }, [roomId])

    async function handleSendQuestion(event: FormEvent){
        event.preventDefault()

        if(newQuestion.trim() == ''){
            return;
        }

        if (!user){
            throw new Error("You must be logged in")
            
        }

        const question = {
            content: newQuestion,
            author:{
                name: user.nome,
                avatar: user.avatar,
            },
            IsAnswered: false,
            IsHighlighted: false,
        }

        await database.ref(`rooms/${roomId}/questions`).push(question)
        
        setNewQuestion('')
    }

    return(
        <div id="page-room">
            <header>
                <div className='content'>
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala - {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea
                    onChange = {event => setNewQuestion(event.target.value)}
                    value = {newQuestion}
                    placeholder="O que você quer perguntar"
                    />
                <div className="form-footer">
                    {user ? (
                        <div className="user-info">
                            <img src={user.avatar} alt={user.nome} />
                            <span>{user.nome}</span>
                        </div>
                    ) : ( 
                    <span>Para enviar uma pergunta, <button>faça seu login</button></span>
                     ) }
                    <Button type="submit" disabled={!user}>Eviar pergunta</Button>
                </div>

                </form>
                
                {questions.map((question) => {
                    <Question content{question.content}
                })}

            </main>  
        </div>
    )
}