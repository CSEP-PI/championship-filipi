import { useState, useEffect } from "react";
import gigante from "./assets/gigante.png";
import { IoClose } from "react-icons/io5";
import "./App.css";
import {Link} from 'react-router-dom'
import api from './services/api'

function App() {
  const [partida, setPartida] = useState();

  useEffect(() => {
    api
      .get('api/partidas/')
      .then((response) => setPartida(response.data))
      .catch((err) => {
        console.error('erro:' + err);
      })
    }, []);
    
  console.log(partida)

  return (
    <div className='Home'>
      <div className="Header">
        <ul className='Header-list'>
          <li>
            <Link to="">Campeonato</Link>
          </li>
          <li>
            <Link to="/TimesLista">Times</Link>
          </li>
          <li>
            <Link to="">Jogadores</Link>
          </li>
        </ul>
        <input type="text" placeholder="Pesquisar por partidas" />
      </div>
      <div className='Match'>
        <h2><strong>Nome do campeonato</strong></h2>
        <div className='Teams'>
          <img src={gigante} alt="timeA" className='Time' />
          <div className='Placar'>
            <p className='Gols'>{partida}</p>
            <IoClose />
            <p className='Gols'>20</p>
          </div>
          <img src={gigante} alt="TimeB" className='Time' />
        </div>
      </div>
      <div className='Table'>
        <p> <Link to="/Tabela" className='SeeMore'>Ver mais</Link></p>
        <h2>Tabela</h2>
        <ol>
          <li>time</li>
          <li>time</li>
          <li>time</li>
          <li>time</li>
          <li>time</li>
          <li>time</li>
          <li>time</li>
          <li>time</li>
        </ol>
      </div>
      <div className='JogadoresContainer'>
        <h2>Jogadores</h2>
        <ul>
          <li>Jogador</li>
          <li>Jogador</li>
          <li>Jogador</li>
          <li>Jogador</li>
          <li>Jogador</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
