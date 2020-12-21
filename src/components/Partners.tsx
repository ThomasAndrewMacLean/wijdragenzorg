import React, { useRef } from 'react';
import { Image } from '.';
import { PartnerType } from '../types';
import { convertToHtml } from '../utils';
import * as Styles from './Partners.styles';

type PropsType = { partners: PartnerType[] };
const Partners = ({ partners }: PropsType) => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    //@ts-ignore
    sliderRef.current.scrollBy({
      top: 0,
      left:
        //@ts-ignore
        -sliderRef.current.scrollWidth / sliderRef.current.childElementCount,
      behavior: 'smooth',
    });
  };
  const slideRight = () => {
    //@ts-ignore
    sliderRef.current.scrollBy({
      top: 0,
      //@ts-ignore
      left: sliderRef.current.scrollWidth / sliderRef.current.childElementCount,
      behavior: 'smooth',
    });
  };
  return (
    <Styles.PartnersWrapper>
      <ul ref={sliderRef}>
        {(partners || []).map((partner, index) => {
          return (
            <li key={index}>
              <div
                className="wrap"
                style={
                  index === partners.length - 1 ? { marginRight: '3rem' } : {}
                }
              >
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

      <div className="arrowWrap">
        <button onClick={slideLeft}>
          <Image imageKey="arrowLeft"></Image>
        </button>
        <button onClick={slideRight}>
          <Image imageKey="arrowRight"></Image>
        </button>
      </div>
    </Styles.PartnersWrapper>
  );
};

export default Partners;
