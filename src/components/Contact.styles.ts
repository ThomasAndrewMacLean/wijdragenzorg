import styled from 'styled-components'

export const ContactWrapper = styled.section`
     

    h2{
        font-weight:400;
    }
 
    display: flex;
        align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 660px) {
      flex-direction: column;
    }
        .textWrap{
            font-weight:200;
            width: 60%;
             @media only screen and (max-width: 660px) {
                width: 100%;
            }
            padding: 2rem;
            border-radius:15px;

            background-color: var(--background-secondary-lighter);
        }
        img{
          
            width: 35%;
            @media only screen and (max-width: 660px) {
                width: 100%;
                margin-bottom: 2rem;
            }
        }

        .addressLine{
            font-weight:400;
            margin-top: 1rem;
     
}
`
