import logoImg from '../assets/images/logo.svg'

export function Room() {
    return(
        <div id="page-room">
            <header>
                <div className='content'>
                    <img src={logoImg} alt="Letmeask" />
                    <div>codigo</div>
                </div>
            </header>
            <main className='content'>
                <div className="room-title">/</div>
            </main>  
        </div>
    )
}