import React from 'react';
import { DienstType } from '../types';
import { convertToHtml } from '../utils';
import * as Styles from './DienstenLijst.styles';

type PropsType = {
  diensten: DienstType[];
};
const DienstenLijst = ({ diensten }: PropsType) => {
  return (
    <Styles.DienstenLijstWrapper>
     

      <ul>
        {diensten.map((dienst, index) => {
          return (
            <Styles.Dienst even={index % 2 === 0} key={index}>
              <img src={dienst.Foto?.[0]?.thumbnails?.large?.url} alt="" />
              <div className="text">
                <h3 id={dienst.Naam.trim()}>{dienst.Naam}</h3>
                <div
                  className="omschrijving"
                  dangerouslySetInnerHTML={{
                    __html: convertToHtml(dienst.Omschrijving),
                  }}
                ></div>
              </div>
            </Styles.Dienst>
          );
        })}
      </ul>
    </Styles.DienstenLijstWrapper>
  );
};

export default DienstenLijst;
