import React, { useContext } from 'react';
import * as Styles from './Contact.styles';
import { Image, T } from './';
import { SEOContext } from '../utils/contexts';

type PropsType = {};
const Contact = ({}: PropsType) => {
  const seoFromContext = useContext(SEOContext) || [];

  const emailAdres =
    seoFromContext.find((x) => x.id === 'emailAdres')?.text || '';

  const telephone =
    seoFromContext.find((x) => x.id === 'telefoonNummer')?.text || '';
  return (
    <Styles.ContactWrapper>
      <Image imageKey="nurse-image"></Image>
      <div className="textWrap">
        <h2>
          <T translationKey="contactTitel"></T>
        </h2>

        <T translationKey="contactOmschrijving"></T>

        <div className="addressLine">
          <a className="link" href={'tel:' + telephone}>
            <T translationKey="contactTelefoon"></T>
          </a>
        </div>
        <div className="addressLine">
          <a className="link" href={'mailto:' + emailAdres} target="blank">
            <T translationKey="contactEmail"></T>
          </a>
        </div>
        <div className="addressLine">
          <T translationKey="contactAdres"></T>
        </div>
      </div>
    </Styles.ContactWrapper>
  );
};

export default Contact;
