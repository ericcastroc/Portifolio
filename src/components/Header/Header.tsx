import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import Curriculo from '../../assets/Curriculo Eric Henrique de Castro Chaves.pdf'
import logoBlack from '../../assets/logoblack.svg'
import logoWhite from '../../assets/logowhite.png'

export function Header() {
  const [isActive, setActive] = useState(false)
  
  var i = 0;

  function toggleTheme() {
    
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')

    i = i+1;
    console.log(i)
    let img = document.getElementsByTagName('img')[0]
    if(i % 2 === 0){
    img.setAttribute('src', logoWhite)
    }else{
      img.setAttribute('src', logoBlack)
    }

  }


  function closeMenu() {
    setActive(true)
  }

  return (
    <Container className="header-fixed">
      <Router>
      <nav className={isActive ? 'active' : ''}>
        <HashLink smooth to="#home" className="logo" >
          <img id='image' className='logoIcon' src={logoWhite} alt='logo'></img>
        </HashLink>
      </nav>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#sobre" onClick={closeMenu}>
            Sobre mim
          </NavHashLink>
          <NavHashLink smooth to="#projetos" onClick={closeMenu}>
            Projetos
          </NavHashLink>
          <NavHashLink smooth to="#contato" onClick={closeMenu}>
            Contato
          </NavHashLink>
          <a href={Curriculo} download className="button">
            Currículo
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
