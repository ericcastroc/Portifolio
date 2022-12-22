import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--purple);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    .information{
      color: var(--purple)
    }
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     max-width: 600px;
   }
  }

  @media(min-width: 1900px){

    h2{
      display: inline-block;
      margin-top: 10rem;
      margin-bottom: 2rem;
      border-bottom: 0.2rem solid var(--blue);
    }


    .about-image{
      text-align: center;
     img{
       margin-bottom: 20rem;
       max-width: 1000px;
     }
    }
  }

  @media(max-width: 1280px){
    padding-top: 12rem;
  }

  @media(max-width: 1024px){
    .code-testing{
      padding-top: 8em;
      width: 135%;
    }

    padding-top: 3rem;
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .about-image{
      display: flex;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }


  @media(max-width: 414px) {
    .code-testing{
      width: 100%;
      height: 100%;
    }
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #050505;
}

.cube{
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
}

.cube div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.cube div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, #00ec00);
    transform: rotateY(calc(90deg * var(--i))) translateZ(149px);
}

.top{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #222;
    transform: rotateX(90deg) translateZ(150px)
}

.top::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #0f0;
    transform: translateZ(-380px);
    filter: blur(70px);
    box-shadow: 0 0 120px rgba(0,255,0,0.2),
    0 0 200px rgba(0,255,0,0.4),
    0 0 300px rgba(0,255,0,0.6),
    0 0 400px rgba(0,255,0,0.8),
    0 0 500px rgba(0,255,0,0,1);
}

@keyframes animate {
    0%{
        transform: rotateX(-30deg) rotateY(0deg);
    }
    100%{
        transform: rotateX(-30deg) rotateY(360deg);
    }
}

`