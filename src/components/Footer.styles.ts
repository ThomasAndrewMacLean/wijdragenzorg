import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  .title {
    font-weight: 400;
    /* color: white;
    text-shadow: 3px 3px 10px var(--colour-black); */
  }

  .left {
    font-weight: 200;
    width: 50%;
  }

  .right {
    font-weight: 200;

    a {
      text-align: right;
    }
  }
  .footerWrap {
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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
    display: block;

    margin-bottom: 0.4rem;
  }
`;
