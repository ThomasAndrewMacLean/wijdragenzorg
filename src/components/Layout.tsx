import React, { ReactNode } from 'react';
import Link from 'next/link';

import { T, Image } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';
import * as Styles from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Styles.Main>
      <Styles.Header>
        <div className="headerWrap">
          <Link href="/">
            <a>
              <T translationKey="title"></T>
            </a>
          </Link>
          <Styles.Navbar>
            <ul>
              {pages
                .filter((p) => p.showInNav)
                .map((pag, i) => {
                  return (
                    <li key={i}>
                      <Link href={prefix + pag.url} passHref>
                        <Styles.NavLink active={page === pag.id}>
                          <div className="imageCircle">
                            <Image imageKey={pag.id + 'Logo'}></Image>
                          </div>

                          <T translationKey={pag.id + 'NavigatieTitle'}></T>
                        </Styles.NavLink>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </Styles.Navbar>
        </div>
      </Styles.Header>
      <div className="pageWrap">{children}</div>
      <Styles.Footer>
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
      </Styles.Footer>
    </Styles.Main>
  );
};

export default Layout;
