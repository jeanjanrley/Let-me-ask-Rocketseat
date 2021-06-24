import copyImg from '../assets/images/copy.svg'

export function RoomCode() {
    return(
        <div>
            <button className="room-code">
                <div>
                    <img src={copyImg} alt="Copy room code" />
                </div>
                
            </button>
        </div>
    )
}