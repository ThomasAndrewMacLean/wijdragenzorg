import React from 'react';
import { T } from '.';
import * as Styles from './Quote.styles';

type PropsType = {
  quoteId: string;
};
const Quote = ({ quoteId }: PropsType) => {
  return (
    <Styles.QuoteWrapper>
      <div className="quoteWrap">
        <span className="quote">
          <T translationKey={quoteId}></T>
        </span>
      </div>
    </Styles.QuoteWrapper>
  );
};

export default Quote;
