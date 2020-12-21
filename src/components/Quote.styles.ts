import styled from 'styled-components';

export const QuoteWrapper = styled.section`
  font-size: 2rem;
  @media only screen and (max-width: 660px) {
    font-size: 1.6rem;
  }
  font-weight: 200;
  text-align: center;
  .quote {
    margin: auto;
  }
  .quoteWrap {
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
   
  }

  background: var(--background-grey);
  width: 100vw;
  left: 0;
  margin-left: calc(450px - 50vw);

  @media only screen and (max-width: 1000px) {
    margin-left: -5vw;
    .quoteWrap {
      padding: 3rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
