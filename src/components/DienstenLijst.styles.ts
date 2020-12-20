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
margin-bottom:5rem;
img{
    width: 40%;
}

.text{
    padding-left:${props => props.even ? "2rem":"0"};
    padding-right:${props => props.even ? "0":"2rem"};

    h3{
        margin-bottom:2rem;
    }
}
`