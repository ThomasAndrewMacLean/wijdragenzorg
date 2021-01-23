import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  .title {
    font-weight: 400;
    /* color: white;
    text-shadow: 3px 3px 10px var(--colour-black); */
  }
  .spacer {
    margin-bottom: 0.4rem;
  }
  .left {
    font-weight: 200;
    width: 50%;
  }

  .right {
    font-weight: 200;
    a {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
    }
    img {
      padding-left: 0.5rem;
      opacity: 0.7;
      transition: all 300ms ease;
    }
    a:hover {
      img {
        transform: scale(1.1);
        opacity: 1;
      }
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
