import React from 'react';
import styled from 'styled-components';

import { Layout, SEO } from '../components';
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
// @ts-ignore
import { componentMap } from '../constants/components.tsx';
import { homePageSections } from '../constants/pages';
const IndexPage = ({
  translations,
  pics,
  seo,
  faqs,
  partners,
}: IndexPageProps) => {
  const page = 'home';

  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <FaqContext.Provider value={faqs}>
            <ParnterContext.Provider value={partners}>
              <Layout page={page}>
                <Main>
                  <SEO page={page}></SEO>
                  {homePageSections.map((comp, index) => {
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
