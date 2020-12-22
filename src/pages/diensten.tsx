import React from 'react';
import styled from 'styled-components';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  DienstType,
  FaqsType,
} from '../types';

import {
  Layout,
  SEO,
  DienstenHeader,
  DienstenLijst,
  Quote,
  Contact,
  Faq,
} from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
  FaqContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const DienstenPage = ({
  translations,
  pics,
  seo,
  diensten,
  faqs,
}: DienstenPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <FaqContext.Provider value={faqs}>
            <Layout page="diensten">
              <Main>
                <SEO></SEO>
                <DienstenHeader diensten={diensten} />
                <DienstenLijst diensten={diensten} />
                <Quote quoteId="textQuote3"></Quote>
                <Contact></Contact>
                <Faq></Faq>
              </Main>
            </Layout>
          </FaqContext.Provider>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main``;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
      diensten: data.Diensten.filter((x) => x.Naam),
      faqs: data.Faqs.filter((x) => x.Vraag),
    },
  };
};
type DienstenPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  diensten: DienstType[];
  faqs: FaqsType[];
};
export default DienstenPage;
