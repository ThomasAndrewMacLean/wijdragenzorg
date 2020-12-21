import styled from 'styled-components';

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

export const NavbarWrapper = styled.nav`
  @media only screen and (max-width: 660px) {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    width: 100vw;
    background: white;
    display: flex;
    justify-content: center;
    padding-top: 0.1rem;
    padding-bottom: 0.5rem;
    box-shadow: 0px 9px 20px 0px #0000005c;
    ul {
      padding-top: 1rem;
      margin-left: 0;
      overflow: scroll;

      li:last-child {
        // padding-right: 1rem;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    ul {
      li {
        margin: 0 0.7rem !important;
      }
    }
  }

  @media only screen and (max-width: 360px) {
    ul {
      li {
        margin: 0 0.5rem !important;
      }
    }
  }

  @media only screen and (max-width: 314px) {
    ul {
      // ADD PADDING SO SCROLL IS NICER
      li:last-child {
        padding-right: 1rem;
      }
    }
  }
`;
