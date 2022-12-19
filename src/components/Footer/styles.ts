import styled from "styled-components";

export const Container = styled.footer`
  padding: 2rem 15rem;
  margin-top: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    
    font-size: 1.8rem;
    color: #FFF;
  }

  .logoIcon {
    width: 40px;
    height: 40px;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3rem;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (min-width:1900px){
    margin-top: 45rem;
  }

  @media(max-width: 1280px){
    margin-top: 30rem;
  }

  @media (max-width: 800px) {
    padding: 4rem 10rem;
    margin-top: 3rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    padding: 4rem 1rem;
    p {
      font-size: 1.2rem;
    }
  }
`;
