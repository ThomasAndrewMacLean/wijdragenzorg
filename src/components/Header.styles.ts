import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100vw;
  background: var(--colour-white);
  left: 0;
  margin-left: calc(450px - 50vw);

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
  }

  .headerWrap {
    a {
      color: inherit;
      text-decoration: none;
    }
    h1 {
      font-weight: 100;
      font-family: 'La Belle Aurore', cursive;
      em {
        color: var(--background-dark);
      }
    }
    width: 90%;
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 660px) {
      flex-direction: column;
    }

    padding: 4rem 0;
    nav {
    }
    ul {
      flex-direction: row;
      display: flex;
      list-style: none;

      li {
        margin: 0 1rem;
      }
    }
  }
`;
