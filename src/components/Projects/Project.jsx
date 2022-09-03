import './Project.css'
import { 
  IoLogoJavascript, 
  IoLogoNodejs, 
  IoLogoCss3, 
  IoLogoHtml5 
} from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'

const Project = () => {

  const images = [
    <IoLogoJavascript />,
    <IoLogoHtml5 />,
    <GrReactjs />,
    <IoLogoNodejs />,
    <IoLogoCss3 />,
  ]

  return (
    
    <div className='portfolio' id='portfolio'>
      <div className='test'>
          <p><span>🔍</span>Portfolio</p>
          <div className='projects snap'>
              <div className='project'>
                <h5>EM BREVE</h5>
              </div>
              <div className='project'>
                <h5>EM BREVE</h5>
              </div>
              <div className='project'>
                <h5>EM BREVE</h5>
              </div>
              <div className='project'>
                <h5>EM BREVE</h5>
              </div>
              <div className='project'>
                <h5>EM BREVE</h5>
              </div>
          </div>
      </div>
      <div className="slider">
            <div className='slide-track'>
            {images.map((i) => {
                return (
                  <div className="tech">
                    <div>{i}</div>
                  </div>
                );
              })}

              {images.map((i) => {
                return (
                  <div className="tech">
                    <div>{i}</div>
                  </div>
                );
              })}

              {images.map((i) => {
                return (
                  <div className="tech">
                    <div>{i}</div>
                  </div>
                );
              })}
            </div>
          </div>
    </div>
  )
}

export default Project