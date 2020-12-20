import React from 'react';
import * as Styles from './RegioHeader.styles';
import { Image, T } from '.';

type PropsType = {};
const RegioHeader = ({}: PropsType) => {
  return (
    <Styles.RegioHeaderWrapper>
      <h2>
        <T translationKey="regiosTitel"></T>
      </h2>
      <T translationKey="regiosOmschrijving"></T>
    </Styles.RegioHeaderWrapper>
  );
};

export default RegioHeader;
