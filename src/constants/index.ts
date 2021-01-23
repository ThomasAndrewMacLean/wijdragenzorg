import { ComponentNameType } from '../types';

export const pageNames = {
  home: 'home',
  diensten: 'diensten',
  regios: "regio's",
  team: 'team',
  contact: 'contact',
  privacy: 'privacy',
  covid: 'covid',
};

export const homePageSections: ComponentNameType[] = [
  'homeWelcome',
  'covidLink',
  'about',
  'partners',
  'quote',
  'contact',
  'social',
  'faq',
];

export const covidPageSections: ComponentNameType[] = [
  'highLight',
  'social',

  'faq',
];

export const contactPageSections: ComponentNameType[] = [
  'contact',
  'social',
  'about',
  'quote',
  'faq',
];

export const dienstenPageSections: ComponentNameType[] = [
  'dienstenHeader',
  'dienstenLijst',
  'quote',
  'contact',
  'social',
  'faq',
];

export const regiosPageSections: ComponentNameType[] = [
  'regioHeader',
  'map',
  'quote',
  'about',
  'contact',
  'social',
  'faq',
];

export const teamPageSections: ComponentNameType[] = [
  'teamleden',
  'quote',
  'contact',
  'faq',
  'about',
];
