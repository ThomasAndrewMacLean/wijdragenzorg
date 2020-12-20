import styled from 'styled-components'

export const MapWrapper = styled.section`

width: 100vw;
  left: 0;
  margin-bottom:0;
  display: flex;
  margin-left: calc(450px - 50vw);
  /* filter: grayscale(0.7);
  transition: filter 500ms ease 500ms; */

 
  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    .quoteWrap {
      padding: 3rem;
    }
  }
  
  `
