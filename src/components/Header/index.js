import './style.css';
import '../../style/utilityClass.css'
import logo from '../../assets/src/myLogo.svg'
import BasicMenu from '../BasicMenu';

export default function Header() {
    return (
        <div className=' header flex-bt-row'>
            <div className='logo-header'>
                <img src={logo} alt='' />
            </div>
            <div className='navbar flex-sa-row'>
                <div className='menuHamburger'>
                    <BasicMenu />
                </div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Tech Stack</li>
                    <li>Project</li>
                </ul>
            </div>
        </div>
    )
}