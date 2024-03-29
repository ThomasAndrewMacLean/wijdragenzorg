import React from 'react';
import styled from 'styled-components';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  TeamLidType,
  FaqsType,
} from './src/types';

import { Layout  } from './src/components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
  TeamledenContext,
  FaqContext,
} from './src/utils/contexts';
import { getDataFromAirtable } from './src/utils';
import { pageNames } from './src/constants';
//@ts-ignore
import { componentMap } from './src/constants/components';
import { teamPageSections } from './src/constants';

const TeamPage = ({
  translations,
  pics,
  seo,
  teamleden,
  faqs,
}: TeamPageProps) => {
  const page = pageNames.team;

  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <TeamledenContext.Provider value={teamleden}>
            <FaqContext.Provider value={faqs}>
              <Layout page={page}>
                <Main>
                  {teamPageSections.map((comp, index) => {
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
            </FaqContext.Provider>
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
