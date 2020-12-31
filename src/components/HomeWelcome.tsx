import React from 'react';
import * as Styles from './HomeWelcome.styles';
import { Image, T } from '.';
import Link from 'next/link';
import { prefix } from '../utils';

type PropsType = {};
const HomeWelcom = ({}: PropsType) => {
  return (
    <Styles.HomeWelcomWrapper>
      <div className="left">
        <T translationKey="welcomeText"></T>

        {/* <button className="btn btn-primary"> */}
        <Link href={prefix + 'contact'}>
          <a className="btn btn-primary">
            <T translationKey="cta"></T>
          </a>
        </Link>
        {/* </button> */}
      </div>

      <Image
        style={{
          maxWidth: '75%',
          maxHeight: '450px',
          objectFit: 'cover',
          transform: 'rotateY(180deg)',
        }}
        imageKey="nurse-image"
      />
    </Styles.HomeWelcomWrapper>
  );
};

export default HomeWelcom;
