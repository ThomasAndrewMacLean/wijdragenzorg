import React from 'react';
import * as Styles from './Navbar.styles';
import { pages } from '../constants/pages';
import Link from 'next/link';
import { T, Image } from '.';
import { prefix } from '../utils';

type PropsType = { page: string };
const Navbar = ({ page }: PropsType) => {
  return (
    <Styles.NavbarWrapper>
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
    </Styles.NavbarWrapper>
  );
};

export default Navbar;
