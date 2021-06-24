import { FORMERR } from 'dns'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/button'
import { RoomCode } from '../components/RoomCode'
import '../styles/room.scss'
import {useParams} from 'react-router-dom'
import { useState, FormEvent} from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'




type RoomParams = {
    id: string
}

export function Room() {

    const {user} = useAuth()

    const params = useParams<RoomParams>()
    const [newQuestion, setNewQuestion] = useState("")

    const roomId = params.id

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
            IsHighlighted: false,
            IsAnswer: false,
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
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
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
                            <img src={}
                        </div>
                    ) : ( 
                    <span>Para enviar uma pergunta, <button>faça seu login</button></span>
                     ) }
                    <Button type="submit" disabled={!user}>Eviar pergunta</Button>
                </div>

                </form>

            </main>  
        </div>
    )
}