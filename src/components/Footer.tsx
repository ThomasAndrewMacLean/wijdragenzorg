import React, { useContext } from 'react';
import * as Styles from './Footer.styles';
import { SEOContext } from '../utils/contexts';
import { T } from './';

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
        <div className="left">
          <div className="title">
            <T translationKey="title"></T>
          </div>

          <T translationKey="contactAdres"></T>
          <br />
          <T translationKey="contactTelefoon"></T>
          <br />
          <T translationKey="contactBTW"></T>
          <br />
          <a href={'mailto:' + emailAdres} target="blank">
            <T translationKey="contactEmail"></T>
          </a>
        </div>
        <div className="middle"></div>
        <div className="right">
          <a href={facebookLink} target="blank" rel="noopener noreferrer">
            facebook
          </a>

          <a href={instagramLink} target="blank" rel="noopener noreferrer">
            instagram
          </a>

      
        </div>
      </div>
    </Styles.FooterWrapper>
  );
};

export default Footer;
