import { useState, useEffect } from "react";
import gigante from "./assets/gigante.png";
import { IoClose } from "react-icons/io5";
import "./App.css";
import {Link} from 'react-router-dom'
import api from './services/api'

function App() {
  const [partida, setPartida] = useState();
  const [tabela, setTabela] = useState();

  useEffect(() => {
    api
      .get('api/partidas/')
      .then((response) => setPartida(response.data))
      .catch((err) => {
        console.error('erro:' + err);
      })

    api
      .get('api/tabela/')
      .then((response) => {
        console.log('Dados da tabela:', response.data);
        setTabela(response.data);
      })
      .catch((err) => {
        console.error('erro' + err);
      })
    }, []);

    console.log('Estado da tabela:', tabela);

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
            <p className='Gols'>{partida?.[0].placar_mandante}</p>
            <IoClose />
            <p className='Gols'>{partida?.[0].placar_visitante}</p>
          </div>
          <img src={gigante} alt="TimeB" className='Time' />
        </div>
      </div>
      <div className='Table'>
        <p> <Link to="/Tabela" className='SeeMore'>Ver mais</Link></p>
        <h2>Tabela</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>P</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>GP</th>
              <th>GC</th>
              <th>SG</th>
            </tr>
          </thead>
          <tbody>
            {tabela && Object.entries(tabela.tabela).map(([key, time]) => (
              <tr key={key}>
                <td>{time.time}</td>
                <td>{time.pontos}</td>
                <td>{time.qtd_jogos}</td>
                <td>{time.vitorias}</td>
                <td>{time.empates}</td>
                <td>{time.derrotas}</td>
                <td>{time.gols}</td>
                <td>{time.gols_s}</td>
                <td>{time.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
