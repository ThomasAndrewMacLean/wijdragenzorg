import React from 'react';
import * as Styles from './Header.styles';
import Link from 'next/link';
import { prefix } from '../utils';
import { T, Navbar } from '.';

type PropsType = { page: string };
const Header = ({ page }: PropsType) => {
  return (
    <Styles.HeaderWrapper>
      <div className="headerWrap">
        <Link href={prefix || ''}>
          <a>
            <h1>
              <T translationKey="title"></T>
            </h1>
          </a>
        </Link>
        <Navbar page={page} />
      </div>
    </Styles.HeaderWrapper>
  );
};

export default Header;
