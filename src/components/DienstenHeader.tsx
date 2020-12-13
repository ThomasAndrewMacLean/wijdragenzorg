import React from 'react';
import * as Styles from './DienstenHeader.styles';
import { Image, T } from '.';
type PropsType = {};
const DienstenHeader = ({}: PropsType) => {
  return (
    <Styles.DienstenHeaderWrapper>
      <h2>
        <T translationKey="dienstenTitle"></T>
      </h2>
      <Image style={{ maxWidth: '100%' }} imageKey="butterfly-image"></Image>
    </Styles.DienstenHeaderWrapper>
  );
};

export default DienstenHeader;
