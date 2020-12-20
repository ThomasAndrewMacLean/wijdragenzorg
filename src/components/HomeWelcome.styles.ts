import styled from 'styled-components'


export const HomeWelcomWrapper = styled.section`

display: flex;
justify-content: space-evenly;

button{
    margin-top:2rem;margin-bottom:2rem;
}
@media only screen and (max-width: 660px) {
        flex-direction: column;
}
.left{
    width: 30%;
    @media only screen and (max-width: 660px) {
        width: 100%;
}
    display: flex;
    justify-content: space-evenly;
    flex-direction:column;
    align-items: center;

    p{
        text-align:center;
        justify-content: space-evenly;
       
    }
}

@media only screen and (max-width: 660px) {
      

      img{

      max-width: 100% !important;
      }  
}

`
 