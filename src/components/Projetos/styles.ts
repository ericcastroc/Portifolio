import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  .imgMockup{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mockup{
    transition: 0.4s;
    width: 0px;
    height: 0px;
  }

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    align-items: center;
    

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--green);
        .mockup{
          transition: 0.5s;
          width: 140px;
          height: 140px;
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--purple);
          transition: color 0.25s;
          &:hover{
            color: var(--purple);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media(min-width: 1900px){


  
    h2{
      text-align: center;
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    .projects{
      .project{
        &:hover{
          .mockup{
            width: 180px;
            height: 180px;
          }
        }
        
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`;
