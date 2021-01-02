import { ComponentNameType } from '../types';

export const pages: { id: string; url: string; showInNav: boolean }[] = [
  { id: 'home', url: '', showInNav: true },
  { id: 'privacy', url: 'privacy', showInNav: false },
  { id: 'diensten', url: 'diensten', showInNav: true },
  { id: 'team', url: 'team', showInNav: true },
  { id: "regio's", url: 'regios', showInNav: true },
  { id: 'contact', url: 'contact', showInNav: true },
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

export const homePageSections: ComponentNameType[] = [
  'homeWelcome',
  'about',
  'partners',
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
