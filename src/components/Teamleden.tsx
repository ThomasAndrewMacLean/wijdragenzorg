import React, { useContext } from 'react';
import * as Styles from './Teamleden.styles';
import { Image, T } from './';
import { convertToHtml } from '../utils';
import { TeamledenContext } from '../utils/contexts';
type PropsType = {};
const Teamleden = ({}: PropsType) => {
  const teamleden = useContext(TeamledenContext) || [];
  return (
    <Styles.TeamledenWrapper>
      <h2>
        <T translationKey="teamTitel"></T>
      </h2>

      <div className="omschrijving">
        <T translationKey="teamOmschrijving"></T>
        <Image imageKey="team-image"></Image>
      </div>
      {!!teamleden.length && (
        <ul className="teamleden">
          {teamleden.map((teamlid, index) => {
            return (
              <li key={index}>
                <img src={teamlid.Foto[0].thumbnails.large.url}></img>
                <div className="textWrap">
                  <h4>{teamlid.Naam}</h4>

                  <div
                    className="omschrijvingText"
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
      )}
    </Styles.TeamledenWrapper>
  );
};

export default Teamleden;
