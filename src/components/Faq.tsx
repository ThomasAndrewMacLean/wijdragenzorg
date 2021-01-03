import React, { useContext } from 'react';
import { Image, T } from '.';
import Head from 'next/head';

import { convertToHtml, getStructuredDataString } from '../utils';
import * as Styles from './Faq.styles';
import { FaqContext } from '../utils/contexts';

type PropsType = {};
const Faq = ({}: PropsType) => {
  const faqs = useContext(FaqContext) || [];

  return (
    <Styles.FaqWrapper>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getStructuredDataString(faqs) }}
        />
      </Head>
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
