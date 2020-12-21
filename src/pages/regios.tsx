import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType, FaqsType } from '../types';

import {
  Layout,
  SEO,
  RegioHeader,
  About,
  Faq,
  Contact,
  Map,
  Quote,
  Social,
} from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const RegiosPage = ({ translations, pics, seo, faqs }: RegiosPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="regios">
            <Main>
              <SEO seo={seo}></SEO>
              <RegioHeader />
              <Map></Map>
              <Quote quoteId="textQuote1"></Quote>
              <About></About>
              <Contact></Contact>
              <Social></Social>
              <Faq faqs={faqs}></Faq>
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
      faqs: data.Faqs.filter((x) => x.Vraag),
    },
  };
};
type RegiosPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  faqs: FaqsType[];
};
export default RegiosPage;
