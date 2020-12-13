import React from 'react';
import * as Styles from './HomeWelcome.styles';
import { Image, T } from '.';

type PropsType = {};
const HomeWelcom = ({}: PropsType) => {
  return (
    <Styles.HomeWelcomWrapper>
      <div className="left">
        <T translationKey="welcomeText"></T>

        <button className="btn btn-primary">
          <T translationKey="cta"></T>
        </button>
      </div>

      <Image
        style={{
          maxWidth: '75%',
          maxHeight: '450px',
          transform: 'rotateY(180deg)',
        }}
        imageKey="nurse-image"
      />
    </Styles.HomeWelcomWrapper>
  );
};

export default HomeWelcom;
