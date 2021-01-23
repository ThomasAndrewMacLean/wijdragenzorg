import React, { ReactNode } from 'react';

import { Footer, Header, SEO } from '.';
import * as Styles from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Styles.Main>
      <SEO page={page}></SEO>
      <Header page={page} />
      <div className="pageWrap">{children}</div>
      <Footer />
    </Styles.Main>
  );
};

export default Layout;
