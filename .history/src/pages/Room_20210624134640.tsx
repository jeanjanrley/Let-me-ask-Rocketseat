import { FORMERR } from 'dns'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/button'
import { RoomCode } from '../components/RoomCode'
import '../styles/room.scss'
import {useParams} from 'react-router-dom'




type RoomParams = {
    id: string
}

export function Room() {

    const params = useParams<RoomParams>()
    const roomID = params.id

    return(
        <div id="page-room">
            <header>
                <div className='content'>
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomID}/>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form>
                    <textarea
                    placeholder="O que você quer perguntar"
                    />
                <div className="form-footer">
                    <span>Para enviar uma pergunta, <button>faça seu login</button></span>
                    <Button type="submit">Eviar pergunta</Button>
                </div>

                </form>

            </main>  
        </div>
    )
}