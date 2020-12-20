import React from 'react';
import * as Styles from './DienstenHeader.styles';
import { Image, T } from '.';
import { DienstType } from '../types';
type PropsType = { diensten: DienstType[] };
const DienstenHeader = ({ diensten }: PropsType) => {
  return (
    <Styles.DienstenHeaderWrapper>
      <h2>
        <T translationKey="dienstenTitle"></T>
      </h2>
      <T translationKey="dienstenOmschrijving"></T>

      <ul>
        {diensten.map((dienst, index) => {
          return (
            <li key={index}>
              <a href={'#' + dienst.Naam.trim()}>{dienst.Naam}</a>
            </li>
          );
        })}
      </ul>
      {/* <Image style={{ maxWidth: '100%' }} imageKey="butterfly-image"></Image> */}
    </Styles.DienstenHeaderWrapper>
  );
};

export default DienstenHeader;
