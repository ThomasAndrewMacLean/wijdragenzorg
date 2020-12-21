import React, { ReactNode, useContext } from 'react';
import Link from 'next/link';

import { T, Image } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';
import * as Styles from './Layout.styles';
import { SEOContext } from '../utils/contexts';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  const seoFromContext = useContext(SEOContext) || [];

  const facebookLink =
    seoFromContext.find((x) => x.id === 'facebookLink')?.text || '';

  const instagramLink =
    seoFromContext.find((x) => x.id === 'instagramLink')?.text || '';
  const emailAdres =
    seoFromContext.find((x) => x.id === 'emailAdres')?.text || '';

  return (
    <Styles.Main>
      <Styles.Header>
        <div className="headerWrap">
          <Link href={prefix + '/'}>
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
      <Styles.Footer className="fullwidth">
        <div className="footerWrap">
          <a href={facebookLink} target="blank" rel="noopener noreferrer">
            facebook
          </a>
          <a href={instagramLink} target="blank" rel="noopener noreferrer">
            instagram
          </a>
          <a href={'mailto:' + emailAdres} target="blank">
            email
          </a>
        </div>
      </Styles.Footer>
    </Styles.Main>
  );
};

export default Layout;
