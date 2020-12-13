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

      <Image style={{ width: '75%' }} imageKey="hero-image" />
    </Styles.HomeWelcomWrapper>
  );
};

export default HomeWelcom;
