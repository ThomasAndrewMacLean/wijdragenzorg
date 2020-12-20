import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType, DienstType } from '../types';

import {
  Layout,
  SEO,
  DienstenHeader,
  DienstenLijst,
  Quote,
} from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const DienstenPage = ({
  translations,
  pics,
  seo,
  diensten,
}: DienstenPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="diensten">
            <Main>
              <SEO seo={seo}></SEO>
              <DienstenHeader diensten={diensten} />
              <DienstenLijst diensten={diensten} />
              <Quote quoteId="textQuote3"></Quote>
            </Main>
          </Layout>
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
    },
  };
};
type DienstenPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  diensten: DienstType[];
};
export default DienstenPage;
