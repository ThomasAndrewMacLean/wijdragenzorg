import styled from 'styled-components'

export const FaqWrapper = styled.section`
    display: flex;
    position: relative;
     justify-content: space-between;
 details{

    max-width: 550px;
    margin-bottom: 1rem;
}
summary{
    cursor: pointer;
    margin-bottom: 1rem;
    outline: none;
    &:focus{
        font-weight:800;
    }

}
details[open]{
 }
details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}

@keyframes sweep {
  0%    {opacity: 0; margin-left: -10px}
  100%  {opacity: 1; margin-left: 0px}
}

.imageWrap{

    position: absolute;
    top: 20px;
    right: 10%;
    border: 5px solid var(--background-dark);
    padding: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:var(--colour-gold);
    border-radius:200px;
    img{
        height: 25px;
        filter: invert();
    }
    transition: transform 300ms ease;

    &:hover{
        transform: scale(1.1) rotate(10deg);
    }
}

`
