import React from 'react';

import {
  HomeWelcome,
  About,
  Partners,
  Quote,
  Contact,
  Social,
  Faq,
  DienstenHeader,
  DienstenLijst,
  RegioHeader,
  Map,
  Teamleden,
} from '../components';
export const componentMap = {
  homeWelcome: <HomeWelcome></HomeWelcome>,
  about: <About></About>,
  partners: <Partners></Partners>,
  quote: <Quote page=""></Quote>,
  contact: <Contact></Contact>,
  social: <Social></Social>,
  faq: <Faq></Faq>,
  dienstenHeader: <DienstenHeader></DienstenHeader>,
  dienstenLijst: <DienstenLijst></DienstenLijst>,
  map: <Map></Map>,
  regioHeader: <RegioHeader></RegioHeader>,
  teamleden: <Teamleden></Teamleden>,
};
