import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType, TeamLidType } from '../types';

import { Layout, SEO, Teamleden } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
  TeamledenContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const TeamPage = ({ translations, pics, seo, teamleden }: TeamPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <TeamledenContext.Provider value={teamleden}>
            <Layout page="team">
              <Main>
                <SEO seo={seo}></SEO>
                <Teamleden teamleden={teamleden}/>
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
    },
  };
};
type TeamPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  teamleden: TeamLidType[];
};
export default TeamPage;
