export type TranslationsType = {
  id: string;
  NL?: string;
  'NL zonder opmaak'?: string;
};
type ImageType = {
  url: string;
  thumbnails: {
    large: { url: string };
  };
};
export type ImagesType = {
  id: string;
  pic: ImageType[];
};

export type FaqsType = {
  Vraag: string;
  Antwoord: string;
};
export type SEOType = {
  id: string;
  text?: string;
  pic: ImageType[];
};

export type TeamLidType = {
  Naam: string;
  Telefoon: string;
  Omschrijving: string;
  Foto: ImageType[];
};

export type DienstType = {
  Naam: string;
  Omschrijving: string;
  Foto: ImageType[];
};

export type PartnerType = {
  Naam: string;
  Omschrijving: string;
  Foto: ImageType[];
};

export type ComponentNameType =
  | 'homeWelcome'
  | 'about'
  | 'partners'
  | 'quote'
  | 'contact'
  | 'social'
  | 'faq'
  | 'dienstenHeader'
  | 'dienstenLijst'
  | 'map'
  | 'regioHeader'
  | 'teamleden'
  | 'highLight'
  | 'covidLink';
