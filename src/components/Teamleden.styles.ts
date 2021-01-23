import styled from 'styled-components';

export const TeamledenWrapper = styled.section`
  .omschrijving {
    display: flex;
    align-items: flex-start;
    margin-bottom: 5rem;
    flex-wrap: wrap;
    span {
      width: 40%;

      @media only screen and (max-width: 660px) {
        width: 100%;
      }
    }
    img {
      transform: translateY(-90px);
      width: 60%;
      @media only screen and (max-width: 660px) {
        /* display:none; */
        width: 100%;
      }
    }
  }

  .teamleden {
    margin-left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media only screen and (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
    gap: 4rem 2rem;

    list-style: none;

    li {
      box-shadow: 10px 10px 20px -5px #00000042;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      h4 {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
      .omschrijvingText {
        font-size: 14px;
        margin-bottom: 1rem;
      }
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center top;
      }
      .textWrap {
        padding: 1rem;
      }
    }
  }
`;
