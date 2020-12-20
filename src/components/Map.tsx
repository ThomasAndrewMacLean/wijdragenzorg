import React from 'react';
import * as Styles from './Map.styles';

type PropsType = {};
const Map = ({}: PropsType) => {
  return (
    <Styles.MapWrapper>
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyABn_VpGLiSwIL0syD1P7G8NUTP2w7cZkM&q=Space+Needle,Seattle+WA"
        allowFullScreen
      ></iframe>
    </Styles.MapWrapper>
  );
};

export default Map;
