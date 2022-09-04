import LoadingPage from './components/LoadingPage/LoadingPage';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';
import useLocalStorage from 'use-local-storage';
import { useState, useEffect } from 'react'

function App() {

  const [loading, setLoading ] = useState(true);
   
  useEffect(() => {
    setTimeout(() => {
    setLoading(false)
    }, [5000])
  }, [])


  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      { loading ? <LoadingPage/> : 
      <>
      <Navbar switchTheme={switchTheme} theme={theme}/>
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
      </>
      }
    </div>
  )
}

export default App
