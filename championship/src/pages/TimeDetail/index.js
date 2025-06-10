import gigante from '../../assets/gigante.png'
import './style.css'

function TimeDetail() {
    return (
        <div className='TimeDetailContainer'>
            <div className='TimeInfos'>
                <img src={gigante} alt='Time' />
                <div className='TimeContent'>
                <h1>TimeA</h1>
                <h2>Capitão</h2>
                </div>
            </div>
                <div className="Escalacao">
                    <div className="Jogadores">
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">Jogadar</div>
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">jogadar</div>
                    </div>

                    <div className="Jogadores">
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">Jogadar</div>
                        <div className="Jogador">Jogador</div>
                        <div className="Jogador">Jogadar</div>
                        <div className="Jogador">Jogadar</div>
                    </div>
                </div>
        </div>
    )
}

export default TimeDetail