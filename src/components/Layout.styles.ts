import styled from 'styled-components';

export const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
  .pageWrap {
    min-height: calc(100vh - 349px);
  }
`;
export const Header = styled.header`
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
      font-family: Homemade Apple;
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

export const NavLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: unset;
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: 100%;
    height: 2px;
    background: var(--colour-highlight);
  }

  &:hover {
    .imageCircle {
      background: var(--colour-highlight);
      border: 2px solid var(--colour-highlight);
      transform: scale(1.2);
    }
  }

  .imageCircle {
    img {
      height: 20px;
      opacity: ${(props) => (props.active ? '1' : '0.8')};
      width: 20px;

      filter: ${(props) => props.active && 'invert(1)'};
    }
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--colour-black);

    background: ${(props) =>
      props.active ? 'var(--colour-highlight)' : 'none'};
    border-radius: 100px;
    height: 40px;
    width: 40px;

    transition: all 300ms ease;
  }
`;
export const Footer = styled.footer`
  .footerWrap {
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
  }

  width: 100vw;
  background: var(--background-secondary-lighter);
  left: 0;
  margin-left: calc(450px - 50vw);

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    .footerWrap {
      padding: 3rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Navbar = styled.nav`
  @media only screen and (max-width: 660px) {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    width: 100vw;
    background: white;
    display: flex;
    justify-content: center;
    padding-top: 1.1rem;
    padding-bottom: 0.5rem;
    box-shadow: 0px 9px 20px 0px #0000005c;
    ul {
      margin-left: 0;
    }
  }
`;
