import React from 'react';
import * as Styles from './Social.styles';
import { T, Image } from './';
type PropsType = { facebookLink: string; instagramLink: string };
const Social = ({ facebookLink, instagramLink }: PropsType) => {
  return (
    <Styles.SocialWrapper className="fullwidth">
      <div className="content">
        <h2>
          <T translationKey="socialTitel"></T>
        </h2>
        <div className="textWrap">
          <T translationKey="socialOmschrijving"></T>

          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <Image className="logo" imageKey="facebookLogo"></Image>
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <Image className="logo" imageKey="instagramLogo"></Image>{' '}
          </a>
        </div>
      </div>
    </Styles.SocialWrapper>
  );
};

export default Social;
