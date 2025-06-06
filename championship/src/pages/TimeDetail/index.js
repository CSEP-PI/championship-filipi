import gigante from '../../assets/gigante.png'
import './style.css'

function TimeDetail(){
    return(
        <div className='TimeDetailContainer'>
            <div>
                <img src={gigante} alt='Time' />
                <h1>TimeA</h1>
                <h2>Capitão</h2>
            </div>

            <div>
                <div>
                    <h3>Camps</h3>
                </div>
                <div>
                    <p>e2025</p>
                    <p>e2024</p>
                    <p>e2023</p>
                </div>
            </div>

            <div>
                <ul>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                    <li>Jogador</li>
                </ul>
            </div>
        </div>
    )
}

export default TimeDetail