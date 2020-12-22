import React, { useContext } from 'react';
import * as Styles from './DienstenHeader.styles';
import { T } from '.';
import { DienstenContext } from '../utils/contexts';
type PropsType = {};
const DienstenHeader = ({}: PropsType) => {
  const diensten = useContext(DienstenContext) || [];

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
