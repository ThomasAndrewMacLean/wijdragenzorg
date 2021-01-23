import React from 'react';
import * as Styles from './HighlightText.styles';
import { T } from './';
type PropsType = {};
const HighlightText = ({}: PropsType) => {
  return (
    <Styles.HighlightTextWrapper className="fullwidth">
      <div className="content">
        <T translationKey="covid"></T>
      </div>
    </Styles.HighlightTextWrapper>
  );
};

export default HighlightText;
