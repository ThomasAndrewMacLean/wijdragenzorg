import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T, Image } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Main>
      <Header>
        <div className="headerWrap">
          <T translationKey="title"></T>
          <nav>
            <ul>
              {pages
                .filter((p) => p.showInNav)
                .map((pag, i) => {
                  return (
                    <li key={i}>
                      <NavLink active={page === pag.id} href={prefix + pag.url}>
                        <div className="imageCircle">
                          <Image imageKey={pag.id + 'Logo'}></Image>
                        </div>

                        <T translationKey={pag.id + 'NavigatieTitle'}></T>
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </Header>
      <div className="pageWrap">{children}</div>
      <Footer>
        <div className="footerWrap">
          <a href="https://www.facebook.com" target="blank">
            facebook
          </a>
          <a href="https://www.instagram.com" target="blank">
            instagram
          </a>
          <a href="mailto:verpleging@wijdragenzorg.be" target="blank">
            email
          </a>
        </div>
      </Footer>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
  .pageWrap {
    min-height: calc(100vh - 349px);
  }
`;
const Header = styled.header`
  width: 100vw;
  background: var(--colour-white);
  left: 0;
  margin-left: calc(450px - 50vw);

  .headerWrap {
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

const NavLink = styled.a<{ active: boolean }>`
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
const Footer = styled.footer`
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

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
