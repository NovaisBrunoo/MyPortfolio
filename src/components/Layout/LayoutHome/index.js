import './style.css';
import perfilavatar from '../../../assets/img/perfil-avatar.svg'
import '../../../style/utilityClass.css'
import logodev from '../../../assets/src/logodev2.svg'
import logo from '../../../assets/src/myLogo.svg'


export default function LayoutHome() {
    return (
        <div className='container flex-colum ' data-aos='fade-up'>
            <div className='info flex-sa-row'  >
                <h1>
                    Hi 👋,
                    My name is
                    <strong> Bruno Novais</strong>
                </h1>
                <div className='border-modal'>
                    <img src={perfilavatar} alt='perfil avatar' />
                </div>
            </div>
            <div className='about-work flex-sa-row' >
                <div className='work-fullstack flex-sa-row'>
                    <h1>Fullstack Developer </h1>
                    <img src={logodev} alt='logo fullstack' />
                </div>
                <div className='work-fullstack flex-sa-row'>
                    <h1>FreeLancer</h1>
                    <img src={logo} alt='logo fullstack' />
                </div>

            </div>
        </div>
    )
}