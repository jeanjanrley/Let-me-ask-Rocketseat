import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/button'
import { RoomCode } from '../components/RoomCode'
import '../styles/room.scss'
import {useParams} from 'react-router-dom'
import { useState, FormEvent, useEffect} from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'




type RoomParams = {
    id: string
}

export function Room() {
    const {user} = useAuth()
    const params = useParams<RoomParams>()
    const [newQuestion, setNewQuestion] = useState("")
    const roomId = params.id
    const {} = useRoom(roomId).

    

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
                
                <div className="question-list"> 
                {questions.map((question) => {
                    return(
                    <Question
                        key={question.id}
                        content={question.content}
                        author={question.author}
                    />
                    )
                })}
                </div>

            </main>  
        </div>
    )
}