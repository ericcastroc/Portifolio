import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

  :root{
    --green: #80F2D2;
    --black: #212121;
    --purple: #7957F2;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
        
        p{
          transition: 0.5s;
          color: black;
        }
      }

      

      .logo{
        transition: 0.5s;
      }
    }

  }



  ul, li {

    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    transition: 0.5s;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    
    text-decoration: none;
  }

  button, .button{
    
    border: none;
    cursor: pointer;
    background-color: var(--purple);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  header.header-fixed{
    transition: 0.5s;
  }

  footer.footer{
    transition: 0.500s;
    background-color: #2b2b2b;
    p{
      transition: 0.1s;
    }
  }

  .logo{
    transition: 0.5s;
  }
`