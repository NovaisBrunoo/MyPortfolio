import './style.css';
import '../../../style/utilityClass.css'
import iconbootstrap from '../../../assets/icons/icon-bootstrap.svg'
import iconcss from '../../../assets/icons/icon-css.svg'
import iconfigma from '../../../assets/icons/icon-figma.svg'
import icongit from '../../../assets/icons/icon-git.svg'
import icongithub from '../../../assets/icons/icon-github.svg'
import iconhtml from '../../../assets/icons/icon-html.svg'
import iconjavascript from '../../../assets/icons/icon-javascript.svg'
import iconpostgres from '../../../assets/icons/icon-postgres.svg'
import iconreact from '../../../assets/icons/icon-react.svg'
import iconvscode from '../../../assets/icons/icon-vscode.svg'

export default function LayoutTech() {
    return (
        <div className='container flex-colum'>
            <div className='tech-title flex-colum'>
                <h1 data-aos='fade-right'>My Tech Stack</h1>
                <strong data-aos='fade-right'>Technologies I’ve been working with recently</strong>
            </div>
            <div className='container-tech flex' data-aos='fade-up'>
                <img src={iconbootstrap} alt='logo bootstrap' />
                <img src={iconcss} alt='logo do css' />
                <img src={iconfigma} alt='logo do figma' />
                <img src={icongit} alt='logo do git' />
                <img src={icongithub} alt='logo do github' />
                <img src={iconhtml} alt='logo do html' />
                <img src={iconjavascript} alt='logo javascript' />
                <img src={iconpostgres} alt='logo postgres' />
                <img src={iconreact} alt='logo react' />
                <img src={iconvscode} alt='logo vscode' />

            </div>
        </div>
    )
}