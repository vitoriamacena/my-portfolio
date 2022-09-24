import { useState } from 'react';
import './Navbar.css'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import { MdLightMode } from 'react-icons/md';
import { GiNightSleep } from 'react-icons/gi';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.svg';

const Navbar = ({switchTheme, theme}) => {

  const [menu, setMenu] = useState(false)
  const [toggle, setToggle] = useState(true)
  const handleMenu = () => setMenu(!menu)
  const handleToggle = () => setToggle(!toggle)

  const closeMenu = () => setMenu(false)

  return (
    <div id='navbar' className='nav'>
      <div id='logo'>
          <a href='/'>
            <img src={Logo} alt="" />
          </a>
      </div>
      <nav>
        <Link 
        activeClass="active" 
        to="contact" spy={true} 
        smooth={true} 
        offset={-10} 
        duration={500} 
        className={menu ? "no-contact" : 'contact'}
        >Contato</Link>
        <div id='hamburguer' onClick={handleMenu}>
          {menu ? (<CgClose />) : (<CgMenuRightAlt />)}
        </div>
        <ul className={menu ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link
              hashSpy={true} 
              activeClass="activeClass" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-10} 
              duration={500} 
              onClick={closeMenu}
              >Home</Link>
              <span className='underline'></span>
            </li>
            <li className='nav-item'>
              <Link 
              hashSpy={true} 
              activeClass="activeClass" 
              to="portfolio" 
              spy={true} 
              smooth={true} 
              offset={-10} 
              duration={500} 
              onClick={closeMenu}
              >Portfolio</Link>
            </li>
            <li className='nav-item'>
              <Link 
              hashSpy={true} 
              activeClass="activeClass" 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-10} 
              duration={500} 
              onClick={closeMenu}
              >Sobre</Link>
            </li>
            <li className='nav-item'>
              <Link 
              hashSpy={true} 
              activeClass="activeClass" 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-10} 
              duration={500} 
              onClick={closeMenu}
              >Contato</Link>
            </li>
        </ul>
        <div id='darkToggle' onClick={() => { switchTheme(); handleToggle() } }>
          {theme === 'dark' ? (<GiNightSleep />) : (<MdLightMode />)}
        </div>
      </nav>     
    </div>
  )
}

export default Navbar