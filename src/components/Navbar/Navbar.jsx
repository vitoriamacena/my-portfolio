import { useState } from 'react';
import './Navbar.css'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import { MdLightMode } from 'react-icons/md';
import { GiNightSleep } from 'react-icons/gi';
import { Link } from 'react-scroll';

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
          <svg
            version="1.1" id="svg725" xmlns="http://www.w3.org/2000/svg" xmlnsvg="http://www.w3.org/2000/svg" viewBox="24.48 109.9 157.08 79.7">
            <defs id="defs722"/>
            <g id="layer1">
            <rect fill="var(--text-primary)" strokeWidth="0.15419" fillOpacity="1" id="rect406-5-0-4" width="15.719183" height="85.415535" x="11.83689" y="111.72663" ry="10.424206" transform="matrix(-0.89000595,0.4559489,0.41110908,0.91158616,0,0)"/>
            <rect fill="var(--text-primary)" strokeWidth="0.15419" fillOpacity="1" id="rect406-5-0-2" width="15.719183" height="85.415535" x="24.562889" y="-223.18886" ry="10.424206" transform="matrix(0.89000596,-0.4559489,-0.41110908,-0.91158616,0,0)"/>
            <rect fill="var(--text-primary)" strokeWidth="0.15419 "fillOpacity="1" id="rect406-5-0-4-1" width="15.719183" height="85.415535" x="-137.55707" y="-141.83745" ry="10.424206" transform="matrix(-0.89000595,-0.4559489,0.41110908,-0.91158616,0,0)"/>
            <rect fill="var(--text-primary)" strokeWidth="0.15419" fillOpacity="1" id="rect406-5-0-2-9" width="15.719183" height="85.415535" x="76.501373" y="-249.4642" ry="10.424206" transform="matrix(0.89000596,-0.4559489,-0.41110908,-0.91158616,0,0)"/>
            <rect fill="var(--text-primary)" strokeWidth="0.15419" fillOpacity="1" id="rect406-5-0-4-1-9" width="15.719183" height="85.415535" x="-189.71861" y="-116.04501" ry="10.424206" transform="matrix(-0.89000595,-0.4559489,0.41110908,-0.91158616,0,0)"/>
            </g>
          </svg>
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