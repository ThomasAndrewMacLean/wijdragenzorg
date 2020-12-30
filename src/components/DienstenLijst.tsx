import React, { useContext, useState } from 'react';
// import { convertToHtml } from '../utils';
import * as Styles from './DienstenLijst.styles';
import { DienstenContext } from '../utils/contexts';
import { Dienst } from './';

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
            <Dienst
              key={index}
              index={index}
              dienst={dienst}
              showMore={showMore}
              showMoreClick={showMoreClick}
            />
          );
        })}
      </ul>
    </Styles.DienstenLijstWrapper>
  );
};

export default DienstenLijst;
