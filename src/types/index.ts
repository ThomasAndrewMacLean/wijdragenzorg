export type TranslationsType = {
  id: string;
  NL?: string;
  'NL zonder opmaak'?: string;
};

export type ImagesType = {
  id: string;
  pic: {
    url: string;
    thumbnails: {
      large:  {url:string};
    };
  }[];
};

export type FaqsType = {
  Vraag: string;
  Antwoord: string;

}
export type SEOType = {
  id: string;
  text?: string;
  pic: {
    url: string;
    thumbnails: {
      large:  {url:string};
    };
  }[];
};

export type TeamLidType ={
  Naam: string;
  Telefoon: string;
  Omschrijving: string;
  Foto: {
    url: string;
    thumbnails: {
      large: {url:string};
    };
  }[];

}