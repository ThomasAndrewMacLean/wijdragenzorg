import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType, FaqsType } from '../types';

import { Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
  FaqContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { pageNames } from '../constants';
//@ts-ignore
import { componentMap } from '../constants/components.tsx';
import { regiosPageSections } from '../constants/pages';
const RegiosPage = ({ translations, pics, seo, faqs }: RegiosPageProps) => {
  const page = pageNames.regios;

  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <FaqContext.Provider value={faqs}>
            <Layout page={page}>
              <Main>
              <SEO page={page}></SEO>
                {regiosPageSections.map((comp, index) => {
                  const component = componentMap[comp];
                  if (component) {
                    return (
                      <component.type page={page} key={index}></component.type>
                    );
                  }
                })}
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
type RegiosPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  faqs: FaqsType[];
};
export default RegiosPage;
