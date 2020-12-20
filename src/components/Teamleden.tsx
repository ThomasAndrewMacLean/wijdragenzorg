import React from 'react';
import { TeamLidType } from '../types';
import * as Styles from './Teamleden.styles';
import { Image, T } from './';
import { convertToHtml } from '../utils';
type PropsType = {
  teamleden: TeamLidType[];
};
const Teamleden = ({ teamleden }: PropsType) => {
  return (
    <Styles.TeamledenWrapper>
      <h2>
        <T translationKey="teamTitel"></T>
      </h2>

      <div className="omschrijving">
        <T translationKey="teamOmschrijving"></T>
        <Image imageKey="cat-image"></Image>
      </div>

      <ul className="teamleden">
        {teamleden.map((teamlid, index) => {
          return (
            <li key={index}>
              <img src={teamlid.Foto[0].thumbnails.large.url}></img>
              <div className="textWrap">
                <h4>{teamlid.Naam}</h4>

                <div className="omschrijvingText"
                  dangerouslySetInnerHTML={{
                    __html: convertToHtml(teamlid.Omschrijving),
                  }}
                ></div>

                <p>{teamlid.Telefoon}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Styles.TeamledenWrapper>
  );
};

export default Teamleden;
