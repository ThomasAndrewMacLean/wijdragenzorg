import React from 'react';
import { T } from '.';
import { pageNames } from '../constants';
import * as Styles from './Quote.styles';

type PropsType = {
  page: string;
};
const Quote = ({ page }: PropsType) => {
  let quoteId = 'textQuote1';
  switch (page) {
    case pageNames.home:
      quoteId = 'textQuote1';
      break;

    case pageNames.diensten:
      quoteId = 'textQuote2';
      break;
    case pageNames.regios:
      quoteId = 'textQuote3';
      break;
    case pageNames.team:
      quoteId = 'textQuote2';
      break;
    case pageNames.contact:
      quoteId = 'textQuote3';
      break;

    default:
      break;
  }
  return (
    <Styles.QuoteWrapper className="fullwidth">
      <div className="content">
        <span className="quote">
          <T translationKey={quoteId || ''}></T>
        </span>
      </div>
    </Styles.QuoteWrapper>
  );
};

export default Quote;
