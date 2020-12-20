import styled from 'styled-components'

export const AboutWrapper = styled.section`
    margin-top:7rem;
    position:relative;
    background: var(--background-lighter);
    padding: 2rem;
h2{
    margin-bottom:2rem;
    font-weight:200;
}
.kwaliteiten{
    -webkit-column-count: 2;
     -moz-column-count: 2;
          column-count: 2;

          li{
              margin-bottom:4px;
          }
}


img{
    z-index: -1;
    position: absolute;
    bottom: -20%;
    right: -25%;
    height: 110%;
}
`
