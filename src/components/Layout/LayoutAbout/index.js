import './style.css';
import '../../../style/utilityClass.css'

export default function LayoutAbout() {
  return (
    <div className='container flex-colum' >
      <div className='about flex-colum '>
        <h1 data-aos='fade-right'>About</h1>
        <p className='about-p' data-aos='fade-left'>Olá, sou Bruno Novais, um entusiasta de desenvolvimento de software em transição de carreira. Com experiência em manutenção elétrica e atualmente matriculado no curso de Desenvolvedor de Software da Cubos Academy, possuo habilidades sólidas em programação, especialmente em Java, HTML, CSS, PostgrSQL , React , JavaScript. Sou proativo, determinado e capaz de trabalhar tanto de forma autônoma quanto em equipe. Estou animado para contribuir com meu comprometimento, motivação e rápido aprendizado em sua empresa</p>
      </div>
      <div className='about-info flex-sa-row' data-aos='fade-up' >

        <div className='box flex-colum'>
          <div className='bullets flex'>
            <div className='bullets-color'>
            </div>
          </div>
          <strong>Linkedin</strong>
          <span>bruno-novais-br13</span>
        </div>

        <div className='box flex-colum'>
          <div className='bullets flex'>
            <div className='bullets-color'>
            </div>
          </div>
          <strong>E-mail</strong>
          <span>novais-bruno@hotmail.com</span>
        </div>

        <div className='box flex-colum'>
          <div className='bullets flex'>
            <div className='bullets-color'>
            </div>
          </div>
          <strong>GitHub</strong>
          <span>NovaisBrunoo</span>
        </div>

        <div className='box flex-colum'>
          <div className='bullets flex'>
            <div className='bullets-color'>
            </div>
          </div>
          <strong>Phone</strong>
          <span>+55 (24) 99272-4075</span>
        </div>
      </div>
    </div>
  )
}