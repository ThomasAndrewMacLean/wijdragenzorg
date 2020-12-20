import React from 'react';
import styled from 'styled-components';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  TeamLidType,
  FaqsType,
} from '../types';

import { Layout, SEO, Teamleden, Faq, Contact } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
  TeamledenContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const TeamPage = ({
  translations,
  pics,
  seo,
  teamleden,
  faqs,
}: TeamPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <TeamledenContext.Provider value={teamleden}>
            <Layout page="team">
              <Main>
                <SEO seo={seo}></SEO>
                <Teamleden teamleden={teamleden} />
                <Contact></Contact>
                <Faq faqs={faqs}></Faq>
              </Main>
            </Layout>
          </TeamledenContext.Provider>
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
      teamleden: data.Teamleden.filter((x) => x.Naam),
      faqs: data.Faqs.filter((x) => x.Vraag),
    },
  };
};
type TeamPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  teamleden: TeamLidType[];
  faqs: FaqsType[];
};
export default TeamPage;
