import styled from 'styled-components';

export const DienstenLijstWrapper = styled.section`
  ul.noStyle {
    margin-left: 0;
    list-style: none;
  }
`;
export const Dienst = styled.li<{ even: boolean }>`
  /* display: flex;
  flex-direction: ${(props) => (props.even ? 'row' : 'row-reverse')};
  */

 clear: both;
  @media only screen and (max-width: 660px) { 
    flex-direction: column-reverse;
    display:flex;
  }
  margin-bottom: 5rem;

  ul {
    list-style: disc;
    margin-top:1rem;
  }
  img {
    float: ${(props) => (props.even ? 'left' : 'right')};
    padding-right: ${(props) => (props.even ? '2rem' : '0')};
    padding-left: ${(props) => (props.even ? '0' : '2rem')};
   
    width: 40%;
    object-fit: cover;
    @media only screen and (max-width: 660px) {
      width: 100%;
      margin-top: 2rem;
      padding:0;
    }
  }

  .text {
    /* padding-left: ${(props) => (props.even ? '2rem' : '0')};
    padding-right: ${(props) => (props.even ? '0' : '2rem')}; */
    p + p {
      margin-top: 1rem;
    }
    @media only screen and (max-width: 660px) {
      padding-left: 0;
      padding-right: 0;
    }
    h3 {
      margin-bottom: 1.5rem;
    }

    height: 300px;
    overflow:hidden;
   
    &.showAll{
        
        height: auto;
        overflow: inherit
      }
  }
`;
