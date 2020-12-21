import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  .footerWrap {
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
  }

  @media only screen and (max-width: 660px) {
    // NAVBAR IS AT THE BOTTOM
    padding-bottom: 96px;
  }
  background: var(--background-secondary-lighter);

  @media only screen and (max-width: 1000px) {
    .footerWrap {
      padding: 3rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
