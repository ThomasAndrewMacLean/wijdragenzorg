import React, { useContext } from 'react';
import * as Styles from './Footer.styles';
import { SEOContext } from '../utils/contexts';
import { T, Image } from './';
import Link from 'next/link';
import { prefix } from '../utils';

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

          <div className="spacer">
            <T translationKey="contactAdres"></T>
          </div>
          <br />
          <div className="spacer">
            <T translationKey="contactTelefoon"></T>
          </div>
          <div className="spacer">
            <T translationKey="contactBTW"></T>
          </div>
          <div className="spacer">
            <a className="link" href={'mailto:' + emailAdres} target="blank">
              <T translationKey="contactEmail"></T>
            </a>
          </div>
          <div className="spacer">
            <Link href={prefix + 'privacy'} passHref>
              <a className="link">
                <T translationKey="privaycLinkText"></T>
              </a>
            </Link>
          </div>
        </div>
        <div className="middle"></div>
        <div className="right">
          <a href={facebookLink} target="blank" rel="noopener noreferrer">
            facebook
            <Image style={{ height: '25px' }} imageKey="facebookLogo"></Image>
          </a>

          <a href={instagramLink} target="blank" rel="noopener noreferrer">
            instagram
            <Image style={{ height: '25px' }} imageKey="instagramLogo"></Image>
          </a>
        </div>
      </div>
      <div className="westerlingMacLean">
        gemaakt met <span className="heart"> ♥ </span> door{' '}
        <a
          href="https://westerling-maclean.be/"
          target="blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex' }}
        >
          westerling & maclean
        </a>
      </div>
    </Styles.FooterWrapper>
  );
};

export default Footer;
