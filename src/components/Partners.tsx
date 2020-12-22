import React, { useRef, useContext } from 'react';
import { Image, T } from '.';
import { convertToHtml } from '../utils';
import { ParnterContext } from '../utils/contexts';
import * as Styles from './Partners.styles';

type PropsType = {};
const Partners = ({}: PropsType) => {
  const partners = useContext(ParnterContext) || [];

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
    <Styles.PartnersWrapper className="fullwidth">
      <h2 className="content arrowWrap">
        <T translationKey="partnersTitel"></T>
      </h2>
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
                  <h3>{partner.Naam}</h3>
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

      <div className="content arrowWrap">
        <button aria-label="vorige" onClick={slideLeft}>
          <Image imageKey="arrowLeft"></Image>
        </button>
        <button onClick={slideRight}>
          <Image aria-label="volgende" imageKey="arrowRight"></Image>
        </button>
      </div>
    </Styles.PartnersWrapper>
  );
};

export default Partners;
