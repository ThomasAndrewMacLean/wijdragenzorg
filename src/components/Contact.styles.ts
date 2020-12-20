import styled from 'styled-components'

export const ContactWrapper = styled.section`
     
    //background-color: var(--background-lighter);
    h2{
        font-weight:400;
    }
 
    display: flex;
        align-items: center;
    justify-content: space-between;
        .textWrap{
            font-weight:200;
            width: 60%;
            padding: 2rem;
            background-color: var(--background-secondary-lighter);
        }
        img{
          
            width: 35%;
            //z-index:-1;
        }

        .addressLine{
            font-weight:400;
            margin-top: 1rem;
     
}
`
