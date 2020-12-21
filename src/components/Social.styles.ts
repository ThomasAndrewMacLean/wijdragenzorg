import styled from 'styled-components';

export const SocialWrapper = styled.section`
  background-color: var(--background-light);
  //color: white;

  .content {
    flex-direction: column;
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
    display: inline-block;
  }
  .logo {
    width: 45px;
    height: 45px;
    opacity: 0.75;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
`;
