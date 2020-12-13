import React from 'react';
import { FaqsType } from '../types';
import * as Styles from './Faq.styles';

type PropsType = {
  faqs: FaqsType[];
};
const Faq = ({ faqs }: PropsType) => {
  return (
    <Styles.FaqWrapper>
      {faqs.map((faq, index) => {
        return (
          <details key={index}>
            <summary>{faq.Vraag}</summary>
            <p>{faq.Antwoord}</p>
          </details>
        );
      })}
    </Styles.FaqWrapper>
  );
};

export default Faq;
