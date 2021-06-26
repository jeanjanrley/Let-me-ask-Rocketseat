import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/button'
import { RoomCode } from '../components/RoomCode'
import '../styles/room.scss'
import {useHistory, useParams} from 'react-router-dom'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'
import deleteImage from '../assets/images/delete.svg'
import { database } from '../services/firebase'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'




type RoomParams = {
    id: string
}

export function AdminRoom() {
    const params = useParams<RoomParams>()
    const roomId = params.id
    const {title, questions} = useRoom(roomId)
    const history = useHistory()

    async function handleEndRoom(){
        await database.ref(`rooms/${roomId}`).update({
            endAt: new Date(),
        })

        history.push('/')
    }

    async function handleDeleteQueestion(questionId: string){
        if (window.confirm('Tem certeza que deseja excluir esta pergunta? ')){
            const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    return(
        <div id="page-room">
            <header>
                <div className='content'>
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button
                            isOutlined
                            onClick={handleEndRoom}
                        >
                            Encerrar sala
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala - {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>
                
                <div className="question-list"> 
                {questions.map((question) => {
                    return(
                    <Question
                        key={question.id}
                        content={question.content}
                        author={question.author}
                    >
                        <button
                            type="button"
                            onClick={() => handleCheckQuestionAnswered(question.id)}
                        >
                            <img src={checkImg} alt="Marcar pergunta como respondida" />
                        </button>
                        <button
                            type="button"
                            onClick={() => handle(question.id)}
                        >
                            <img src={answerImg} alt="dar destaque a pergunta" />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleDeleteQueestion(question.id)}
                        >
                            <img src={deleteImage} alt="Remover pergunta" />
                        </button>

                    </Question>
                    )
                })}
                </div>

            </main>  
        </div>
    )
}