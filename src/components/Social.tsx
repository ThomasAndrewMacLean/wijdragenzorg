import React, { useContext } from 'react';
import * as Styles from './Social.styles';
import { T, Image } from './';
import { SEOContext } from '../utils/contexts';

type PropsType = {};
const Social = ({}: PropsType) => {
  const seoFromContext = useContext(SEOContext) || [];

  const facebookLink =
    seoFromContext.find((x) => x.id === 'facebookLink')?.text || '';

  // const instagramLink =
  //   seoFromContext.find((x) => x.id === 'instagramLink')?.text || '';

  return (
    <Styles.SocialWrapper className="fullwidth">
      <div className="content">
        <Styles.HashTag>
          <T translationKey="socialHashTag"></T>
        </Styles.HashTag>
        <h2>
          <T translationKey="socialTitel"></T>
        </h2>
        <div className="textWrap">
          <T translationKey="socialOmschrijving"></T>

          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <Image className="logo" imageKey="facebookLogo"></Image> Facebook
          </a>
          {/* <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <Image className="logo" imageKey="instagramLogo"></Image> Instagram
          </a> */}
        </div>
      </div>
    </Styles.SocialWrapper>
  );
};

export default Social;
