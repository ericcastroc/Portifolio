import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.png"
import { NavHashLink } from "react-router-hash-link"
import Typical from 'react-typical'

export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
          <p>Hello World!<span className="wave" role="img" aria-labelledby="wave">👋🏻</span>, eu sou</p>
          <h1>Eric Castro</h1>
          <h3>{''}
          <Typical
            loop={Infinity}
            steps={[
              'FullStack Developer',
              1500,
              'Computer Scientist',
              1500,
              'Web Developer',
              1500,
              'Computer Technician',
              1500,
            ]}
            />
          </h3>
          <p className="small-resume">Estudante de Ciências da Computação, com foco em Desenvolvimento e apaixonado por Tecnologia. </p>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Contato</NavHashLink>
            </BrowserRouter>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.3*1000}>
          <img src={Illustration} alt="Ilustração"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}