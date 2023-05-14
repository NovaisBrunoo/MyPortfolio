import './style.css';
import '../../style/utilityClass.css'
import logo from '../../assets/src/myLogo.svg'

export default function Header() {
    return (
        <div className=' header flex-bt-row'>
            <img src={logo} alt='' />
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Project</li>
            </ul>
        </div>
    )
}