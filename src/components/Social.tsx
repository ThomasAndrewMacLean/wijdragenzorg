import React from 'react';
import * as Styles from './Social.styles';
import { T } from './';
type PropsType = {};
const Social = ({}: PropsType) => {
  return (
    <Styles.SocialWrapper className="fullwidth">
      <div className="content">
        <h2>
          <T translationKey="socialTitel"></T>
        </h2>
      </div>
    </Styles.SocialWrapper>
  );
};

export default Social;
