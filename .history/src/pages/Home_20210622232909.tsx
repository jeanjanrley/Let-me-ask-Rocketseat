import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/button'
import { useAuth } from '../hooks/useAuth'
import { FormEvent } from 'react'


export function Home() {

    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()
    const <div roomCode,="" setRoo=""></div>

    async function handleCreteRoom(){
        if (!user){
            await signInWithGoogle()
        }
        history.push('/rooms/new')
            
        }

    async function handleJoinRoom(event: FormEvent){
        event.preventDefault()

    }


    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas." />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <button onClick={handleCreteRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo go Google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type='text'
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}