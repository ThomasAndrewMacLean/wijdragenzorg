import React, { useContext, useState } from 'react';
import { convertToHtml } from '../utils';
import * as Styles from './DienstenLijst.styles';
import { DienstenContext } from '../utils/contexts';

type PropsType = {};
const DienstenLijst = ({}: PropsType) => {
  const diensten = useContext(DienstenContext) || [];
  const [showMore, setShowMore] = useState(diensten.map(() => false));

  const showMoreClick = (index: number) => {
    const copy = showMore;
    copy[index] = !copy[index];
    console.log(copy);
    setShowMore([...copy]);
  };

  return (
    <Styles.DienstenLijstWrapper>
      <ul className="noStyle">
        {diensten.map((dienst, index) => {
          return (
            <Styles.Dienst even={index % 2 === 0} key={index}>
              <img src={dienst.Foto?.[0]?.thumbnails?.large?.url} alt="" />
              <div className={showMore[index] ? 'text showAll' : 'text'}>
                <h3 id={dienst.Naam.trim()}>{dienst.Naam}</h3>
                <div
                  className="omschrijving"
                  dangerouslySetInnerHTML={{
                    __html: convertToHtml(dienst.Omschrijving),
                  }}
                ></div>
                {!showMore[index] && <div className="blur"></div>}
              </div>
              {!showMore[index] && (
                <button onClick={() => showMoreClick(index)}>Toon meer</button>
              )}
            </Styles.Dienst>
          );
        })}
      </ul>
    </Styles.DienstenLijstWrapper>
  );
};

export default DienstenLijst;
