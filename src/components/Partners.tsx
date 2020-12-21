import React from 'react';
import { PartnerType } from '../types';
import { convertToHtml } from '../utils';
import * as Styles from './Partners.styles';

type PropsType = { partners: PartnerType[] };
const Partners = ({ partners }: PropsType) => {
  return (
    <Styles.PartnersWrapper>
      <ul>
        {(partners || []).map((partner, index) => {
          return (
            <li key={index}>
              <div className="wrap">
                <img src={partner.Foto?.[0]?.thumbnails.large.url} alt="" />
                <div className="textWrap">
                  <h4>{partner.Naam}</h4>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: convertToHtml(partner.Omschrijving),
                    }}
                  ></div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Styles.PartnersWrapper>
  );
};

export default Partners;
