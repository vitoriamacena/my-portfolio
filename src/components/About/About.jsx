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
                    Lorem ipsum dolor sit amet. Et placeat maxime est animi totam qui sapiente dolores. Hic sint velit aut accusantium libero qui saepe maiores sed harum voluptas et odio distinctio. Quo similique consequuntur est velit praesentium sed ipsum laudantium.
                    Qui voluptatem doloremque hic omnis harum ut repellat sunt sit error perspiciatis ut quae explicabo est rerum sapiente. Rem libero molestiae nam consequatur Quis aut ducimus iusto vel laudantium velit.
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