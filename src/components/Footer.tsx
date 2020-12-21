import React, { useContext } from 'react';
import * as Styles from './Footer.styles';
import { SEOContext } from '../utils/contexts';

type PropsType = {};
const Footer = ({}: PropsType) => {
  const seoFromContext = useContext(SEOContext) || [];

  const facebookLink =
    seoFromContext.find((x) => x.id === 'facebookLink')?.text || '';

  const instagramLink =
    seoFromContext.find((x) => x.id === 'instagramLink')?.text || '';
  const emailAdres =
    seoFromContext.find((x) => x.id === 'emailAdres')?.text || '';

  return (
    <Styles.FooterWrapper className="fullwidth">
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
    </Styles.FooterWrapper>
  );
};

export default Footer;
