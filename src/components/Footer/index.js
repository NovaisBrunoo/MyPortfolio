import './style.css';
import '../../style/utilityClass.css'
import logo from '../../assets/src/myLogo.svg'
import github from '../../assets/icons/github-footer.svg'
import linkedin from '../../assets/icons/linkedin-footer.svg'
import whatsapp from '../../assets/icons/whatsapp-footer.svg'

export default function Footer() {
  return (
    <div className='footer flex-colum'>
      <div className='footer-top flex-bt-row'>
        <img src={logo} alt='' />
        <ul className='flex'>
          <li>+55 (24)99272-4075</li>
          <li>novais-bruno@hotmail.com</li>
          <li><img src={github} alt='' /> <img src={linkedin} alt='' /> <img src={whatsapp} alt='' /> </li>
        </ul>
      </div>
      <div className='footer-bottom flex-fs-row'>
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