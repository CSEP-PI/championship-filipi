import './style.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom'

function Tabela(){
    return(
        <div className="TableContainer">
            <div className="TableContent">
            < IoMdArrowRoundBack className='TableArrow' /> 
            <p><Link to='/' className='TableBack'>Voltar</Link></p>
                <h1 className="TableTitle">Tabela do Campeonato</h1>
                <div className="TablePart">
                    <ul className="Column">
                        <li>Time A | V | D | E | Saldo de gols</li>
                        <li>Time B | V | D | E | Saldo de gols</li>
                        <li>Time C | V | D | E | Saldo de gols</li>
                        <li>Time D | V | D | E | Saldo de gols</li>
                    </ul>
                    <ul className="Column">
                        <li>Time E | V | D | E | Saldo de gols</li>
                        <li>Time F | V | D | E | Saldo de gols</li>
                        <li>Time G | V | D | E | Saldo de gols</li>
                        <li>Time H | V | D | E | Saldo de gols</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tabela;