import React from 'react';
import styled from 'styled-components';

import {
  Layout,
  SEO,
  Faq,
  HomeWelcome,
  About,
  Contact,
  Quote,
  Partners,
  Social,
} from '../components';
import {
  TranslationContext,
  PictureContext,
  FaqContext,
  SEOContext,
  ParnterContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  FaqsType,
  PartnerType,
} from '../types';

const IndexPage = ({
  translations,
  pics,
  seo,
  faqs,
  partners,
}: IndexPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <FaqContext.Provider value={faqs}>
            <ParnterContext.Provider value={partners}>
              <Layout page="home">
                <Main>
                  <SEO></SEO>
                  <HomeWelcome></HomeWelcome>
                  <About></About>
                  <Partners></Partners>
                  <Quote quoteId="textQuote1"></Quote>
                  <Contact></Contact>
                  <Social></Social>
                  <Faq></Faq>
                </Main>
              </Layout>
            </ParnterContext.Provider>
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
      faqs: data.Faqs.filter((x) => x.Vraag),
      partners: data.Partners.filter((x) => x.Naam),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  faqs: FaqsType[];
  partners: PartnerType[];
};

export default IndexPage;
