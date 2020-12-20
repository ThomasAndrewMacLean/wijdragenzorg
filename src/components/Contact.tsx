import React from 'react';
import * as Styles from './Contact.styles';
import { Image, T } from './';

type PropsType = {};
const Contact = ({}: PropsType) => {
  return (
    <Styles.ContactWrapper>
      <Image imageKey="nurse-image"></Image>
      <div className="textWrap">
        <h2>
          <T translationKey="contactTitel"></T>
        </h2>

        <T translationKey="contactOmschrijving"></T>

        <div className="addressLine">
          <T translationKey="contactTelefoon"></T>
        </div>
        <div className="addressLine">
          <T translationKey="contactEmail"></T>
        </div>
        <div className="addressLine">
          <T translationKey="contactAdres"></T>
        </div>
      </div>
    </Styles.ContactWrapper>
  );
};

export default Contact;
