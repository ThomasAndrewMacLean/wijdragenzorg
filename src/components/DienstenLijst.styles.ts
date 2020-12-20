import styled from 'styled-components'

export const DienstenLijstWrapper = styled.section`
    ul{
        margin-left:0;
        list-style:none;
    }

`
export const Dienst = styled.li<{even: boolean}>`
display:flex;
flex-direction:${props => props.even ? "row":"row-reverse"};
@media only screen and (max-width: 660px) {
    flex-direction: column-reverse;
}
margin-bottom:5rem;


img{
    width: 40%;
    @media only screen and (max-width: 660px) {
        width: 100%;
        margin-top:2rem;
            }
}

.text{
    padding-left:${props => props.even ? "2rem":"0"};
    padding-right:${props => props.even ? "0":"2rem"};

    @media only screen and (max-width: 660px) {
        padding-left:0;
        padding-right:0;
            }
    h3{
        margin-bottom:2rem;
    }
}
`