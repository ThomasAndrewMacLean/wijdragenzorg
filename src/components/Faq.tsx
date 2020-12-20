import React from 'react';
import { Image, T } from '.';
import { FaqsType } from '../types';
import { convertToHtml } from '../utils';
import * as Styles from './Faq.styles';

type PropsType = {
  faqs: FaqsType[];
};
const Faq = ({ faqs }: PropsType) => {
  return (
    <Styles.FaqWrapper>
      <div className="left">
        <h2>
          <T translationKey="faqTitel"></T>
        </h2>
        {faqs.map((faq, index) => {
          return (
            <details key={index}>
              <summary>{faq.Vraag}</summary>
              <div
                dangerouslySetInnerHTML={{
                  __html: convertToHtml(faq.Antwoord),
                }}
              ></div>
            </details>
          );
        })}
      </div>
      <div className="right">
        <div className="imageWrap">
          <Image imageKey="faqLogo"></Image>
          <div className="tooltip">
            <T translationKey="nogVragen"></T>
          </div>
        </div>
      </div>
    </Styles.FaqWrapper>
  );
};

export default Faq;
