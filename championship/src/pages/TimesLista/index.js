import gigante from '../../assets/gigante.png'
import './style.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'


function TimesLista() {
    const times = [('TimeA', <img src={gigante} alt='TimeA' />),
    ('TimeB', <img src={gigante} alt='TimeB' />),
    ('TimeC', <img src={gigante} alt='TimeC' />),
    ('TimeD', <img src={gigante} alt='TimeD' />),]

    return (
        <div className='TeamsListContainer'>
            <div className='MainTeamsList'>
                <div>
                    <Link to='/'> <IoMdArrowRoundBack /> Voltar</Link>
                </div>
                <h1>Lista De Times</h1>
                <div>
                    <ul>
                        {times.map((time) => <li><Link to='/TimeDetail'>{time}</Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TimesLista