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

            <div>
                <div className="Campeonatos">
                    <div className="team-name">Capsibo</div>
                    <div className="Edicoes">
                        <div className="edicao">e2025</div>
                        <div className="edicao">e2024</div>
                        <div className="edicao">e2023</div>
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
        </div>
    )
}

export default TimeDetail