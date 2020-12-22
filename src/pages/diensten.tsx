import React from 'react';
import styled from 'styled-components';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  DienstType,
  FaqsType,
  ComponentNameType,
} from '../types';

import { Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
  FaqContext,
  DienstenContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { pageNames } from '../constants';
//@ts-ignore
import { componentMap } from '../constants/components.tsx';

const DienstenPage = ({
  translations,
  pics,
  seo,
  diensten,
  faqs,
}: DienstenPageProps) => {
  const page = pageNames.diensten;
  const pageComponents: ComponentNameType[] = [
    'dienstenHeader',
    'dienstenLijst',
    'quote',
    'contact',
    'social',
    'faq',
  ];

  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <FaqContext.Provider value={faqs}>
            <DienstenContext.Provider value={diensten}>
              <Layout page={page}>
                <Main>
                  <SEO></SEO>
                  {pageComponents.map((comp, index) => {
                    const component = componentMap[comp];
                    if (component) {
                      return (
                        <component.type
                          page={page}
                          key={index}
                        ></component.type>
                      );
                    }
                  })}
                </Main>
              </Layout>
            </DienstenContext.Provider>
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
