import styled from 'styled-components';

export const PartnersWrapper = styled.section`
  ul {
    padding: 2rem;
    margin-left: -2rem;
    gap: 3rem;
    overflow: scroll;
    list-style: none;
    flex: 1;
    display: flex;

    .wrap {
      min-width: 400px;
      box-shadow: 10px 10px 20px -5px #00000042;
      display: flex;
      border-radius: 20px;
      overflow: hidden;

      img {
        width: 40%;
        object-fit: cover;
      }
      .textWrap {
        padding: 1rem;
        width: 60%;

        h4 {
          margin-bottom: 1rem;
        }

        .text {
          font-size: 0.9rem;
        }
      }
    }
    .wrap:last-child {
      padding-right: 3rem;
    }
  }
`;
