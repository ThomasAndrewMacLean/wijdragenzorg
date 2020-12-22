import styled from 'styled-components';

export const FaqWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  details {
    max-width: 550px;
    margin-bottom: 1rem;
    font-weight: 200;
  }
  summary {
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 1rem;
    outline: none;
    &:focus {
      font-weight: 800;
    }
  }
  details[open] {
  }
  details[open] summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }

  @keyframes sweep {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  .imageWrap {
    position: absolute;
    top: 20px;
    @media only screen and (max-width: 660px) {
      top: -50px;
    }
    right: 10%;
    border: 5px solid var(--background-light);
    padding: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-dark);
    border-radius: 200px;
    img {
      height: 25px;
      filter: invert();
      transition: transform 300ms ease;
    }

    .tooltip {
      pointer-events: none;
      // display: none;
      opacity: 0;
      transition: opacity 300ms ease;
      position: absolute;
      top: 70px;
      width: 250px;
      right: 15%;
      background-color: var(--background-light);
      padding: 1rem 2rem;
      text-align: center;
      border-radius: 15px;
    }
    &:hover {
      img {
        transform: scale(1.1) rotate(10deg);
      }
      .tooltip {
        opacity: 1;
        display: block;
      }
    }
  }
`;
