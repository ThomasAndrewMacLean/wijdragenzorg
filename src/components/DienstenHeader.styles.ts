import styled from 'styled-components'

export const DienstenHeaderWrapper = styled.section`

    ul{
        border-radius:15px;
        background: var(--background-lighter);
        display: inline-block;
        padding: 2rem 4rem;
        margin-top: 2rem;
        @media only screen and (max-width: 660px) {
          margin-left: 0;
            }
        /* list-style:none; */

        a{
            color: inherit;
        }

    }
`
