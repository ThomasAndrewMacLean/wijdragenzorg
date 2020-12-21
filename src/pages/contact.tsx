import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType, FaqsType } from '../types';

import { Layout, SEO, About, Contact, Social, Faq, Quote } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const ContactPage = ({ translations, pics, seo, faqs }: ContactPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="contact">
            <Main>
              <SEO seo={seo}></SEO>
              <Contact></Contact>
              <Social></Social>
              <About></About>
              <Quote quoteId="textQuote2"></Quote>
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
type ContactPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  faqs: FaqsType[];
};
export default ContactPage;
