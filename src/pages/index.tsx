import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { Layout, SEO, Faq, HomeWelcome } from '../components';
import {
  TranslationContext,
  PictureContext,
  FaqContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { TranslationsType, ImagesType, SEOType, FaqsType } from '../types';

const IndexPage = ({ translations, pics, seo, faqs }: IndexPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <FaqContext.Provider value={faqs}>
            <Layout page="home">
              <Main>
                <SEO seo={seo}></SEO>
                <HomeWelcome></HomeWelcome>

                <Faq faqs={faqs}></Faq>
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
      faqs: data.Faqs.filter((x) => x.Vraag),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  faqs: FaqsType[];
};

export default IndexPage;
