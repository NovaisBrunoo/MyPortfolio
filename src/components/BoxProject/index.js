import './style.css';
import '../../style/utilityClass.css';
import imagem from '../../assets/img/project-test.svg'
import imagem2 from '../../assets/img/project-02.svg'
import imagem3 from '../../assets/img/project-03.svg'
import imagem4 from '../../assets/img/project-04.svg'
import api from "../../api/api";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function BoxProject() {
  const [localArray, setLocalArray] = useState([])

  async function getRepo() {
    try {
      const response = await api.get('/repos?orderBy=id&sort=desc')
      const itemsLimitados = response.data.slice(0, 4);
      setLocalArray(itemsLimitados)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getRepo()

  }, [])

  console.log(localArray)


  return (
    <>
      {localArray.map((rep, index) => (
        <div className='box-modal flex-bt-colum' data-aos='zoom-in' key={index}>
          <img src={index === 0 ? imagem : null || index === 1 ? imagem2 : null || index === 2 ? imagem3 : null || index === 3 ? imagem4 : null} alt='imagem de teste para os box' />
          <h1>{rep.name}</h1>
          <p>
            {rep.description}
          </p>
          <div className='box-link flex-sa-row'>
            <Link to={rep.html_url} target="_blank" >View Code</Link>
            <strong className='flex'><span className='circule'></span>{rep.language}</strong>
          </div>

        </div>
      ))}
    </>
  )
}