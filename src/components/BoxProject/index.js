import './style.css';
import '../../style/utilityClass.css';
import imagem from '../../assets/img/project-test.svg'


export default function BoxProject() {
    return (
        <div className='box-modal flex-bt-colum' data-aos='zoom-in'>
            <img src={imagem} alt='imagem de teste para os box' />
            <h1>Project Tile goes here</h1>
            <p>
                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
            </p>
            <div className='box-link flex-sa-row'>
                <a>View Code</a>
                <a>Link Preview</a>
            </div>
        </div>
    )
}