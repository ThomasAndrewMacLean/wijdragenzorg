import React from 'react';
import * as Styles from './CovidLink.styles';
import Link from 'next/link';
import { prefix } from '../utils';
import { Image, T } from './';
type PropsType = {};
const CovidLink = ({}: PropsType) => {
  return (
    <Styles.CovidLinkWrapper className="fullwidth">
      <div className="content">
        <div className="virus">
          <Image imageKey="virus"></Image>
        </div>
        <div>
          <T
            style={{ fontWeight: 100 }}
            translationKey="meerWetenOverCovid"
          ></T>
          <Link href={prefix + 'covid'} passHref>
            <a className="covidLink">
              <T translationKey="leesMeerOverCovid"></T>
            </a>
          </Link>
        </div>
      </div>
    </Styles.CovidLinkWrapper>
  );
};

export default CovidLink;
