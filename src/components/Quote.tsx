import React from 'react';
import { T } from '.';
import * as Styles from './Quote.styles';

type PropsType = {
  quoteId: string;
};
const Quote = ({ quoteId }: PropsType) => {
  return (
    <Styles.QuoteWrapper className="fullwidth">
      <div className="content">
        <span className="quote">
          <T translationKey={quoteId}></T>
        </span>
      </div>
    </Styles.QuoteWrapper>
  );
};

export default Quote;
