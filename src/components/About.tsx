import React from 'react';
import * as Styles from './About.styles';
import { Image, T } from './';
type PropsType = {};
const About = ({}: PropsType) => {
  return (
    <Styles.AboutWrapper>
      <h2>
        <T translationKey="waaromKiezenTitel"></T>
      </h2>

      <div className="kwaliteiten">
        <T translationKey="kwaliteitenLijst"></T>
      </div>

      <Image imageKey="walkingstick-image"></Image>
    </Styles.AboutWrapper>
  );
};

export default About;
