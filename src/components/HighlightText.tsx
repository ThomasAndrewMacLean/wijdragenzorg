import React from 'react';
import * as Styles from './HighlightText.styles';
import { T } from './';
type PropsType = {};
const HighlightText = ({}: PropsType) => {
  return (
    <Styles.HighlightTextWrapper>
      <T translationKey="covid"></T>
    </Styles.HighlightTextWrapper>
  );
};

export default HighlightText;
