import styled from 'styled-components';

export const CovidLinkWrapper = styled.section`
  background-color: var(--background-secondary-lighter);

  h2 {
    margin-bottom: 1.5rem;
  }
  .covidLink {
    margin-top: 1rem;
    display: flex;
  }

  .virus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    img {
      height: 70px;
      filter: invert(1) drop-shadow(2px 4px 6px lightgrey);
    }
  }
`;
