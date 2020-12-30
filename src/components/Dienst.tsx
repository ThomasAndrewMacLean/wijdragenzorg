import React, { useState, useRef, useEffect } from 'react';
import { DienstType } from '../types';
import * as Styles from './Dienst.styles';
import { convertToHtml } from '../utils';

type PropsType = {
  index: number;
  dienst: DienstType;
  showMore: any;
  showMoreClick: any;
};
const Dienst = ({ index, dienst, showMore, showMoreClick }: PropsType) => {
  const [hasOverflow, sethasOverflow] = useState(false);
  const dienstRef = useRef(null);

  useEffect(() => {
    if (dienstRef && dienstRef.current) {
      //@ts-ignore
      if (dienstRef.current.getBoundingClientRect().height > 300) {
        sethasOverflow(true);
      }
    }
    return () => {};
  }, [dienstRef]);
  return (
    <Styles.DienstWrapper even={index % 2 === 0} ref={dienstRef}>
      <img src={dienst.Foto?.[0]?.thumbnails?.large?.url} alt="" />
      <div className={showMore[index] ? 'text showAll' : 'text'}>
        <h3 id={dienst.Naam.trim()}>{dienst.Naam}</h3>
        <div
          className="omschrijving"
          dangerouslySetInnerHTML={{
            __html: convertToHtml(dienst.Omschrijving),
          }}
        ></div>
        {hasOverflow && !showMore[index] && <div className="blur"></div>}
      </div>
      {hasOverflow && !showMore[index] && (
        <button onClick={() => showMoreClick(index)}>Toon meer</button>
      )}
    </Styles.DienstWrapper>
  );
};

export default Dienst;
