import './About.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Picture from '../../assets/vitoria-macena.jpg'

const About = () => {
  return (
    <div className='wrapper' id='about'>
        <div className='title-wrapper'>
              <p id='p'><span>👩‍🦰</span>Sobre</p>
           <h2 id='h2'>Vitória Macena</h2>
        </div>
        <div className="about">  
           <div className='text'>
                <p>
                    Focada em desenvolver soluções criativas que realmente agregam de forma a
                    impactar pessoas e, de alguma forma, a sociedade.
                    Acredito no trabalho em equipe e na geração de valor através dele.
                    <br></br>
                    <br></br>
                    Desde menina, sempre fui apaixonada por tudo o que envolvia tecnologia e design.
                    Hoje, tento unir códigos limpos e funcionais a projetos visualmente bonitos e
                    agradáveis.
                    <br></br>
                    <br></br>
                    No meu tempo livre, gosto de explorar o que há de melhor no mundo e ouvir uma boa
                    música.
                </p>
                <div className='git-in'>
                  <a target="_blank" rel='noopener noreferrer' href="https://linkedin.com/in/vimmac"><FaLinkedin /></a>
                  <a target="_blank" rel='noopener noreferrer' href="https://github.com/vitoriamacena"><FaGithub /></a>
                </div>
            </div>
           <div id='picture'>
                <img src={Picture} alt="" />
            </div>
        </div>  
    </div>
  )
}

export default About