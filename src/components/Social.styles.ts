import styled from 'styled-components';

export const SocialWrapper = styled.section`
  background-color: var(--background-light);
  //color: white;

  .content {
    flex-direction: column;
    position: relative;
  }
  h2 {
    font-weight: 400;
  }
  .textWrap {
    max-width: 550px;
    font-weight: 200;
  }

  a {
    margin-top: 2rem;
    margin-right: 2rem;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    img {
      margin-right: 0.5rem;
    }
    .logo {
      width: 45px;
      height: 45px;
      opacity: 0.75;
      transition: all 300ms ease;
    }
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
      .logo {
        opacity: 0.9;
      }
    }
  }
`;

export const HashTag = styled.span`
  position: absolute;
  bottom: 20px;
  right: 0px;
  color: white;
  font-size: 2rem;
  text-shadow: 3px 3px 10px var(--colour-gold);
`;
