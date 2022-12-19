import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"



export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Entre em contato comigo</h2>
        <p>Se você viu o meu potencial ou quer conversar comigo, não exite em me mandar uma mensagem.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:eric-henrique44@hotmail.com">eric-henrique44@hotmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5537998063394">(37) 99806-3394</a>
        </div>  
      </div>
    </Container>
  )
}