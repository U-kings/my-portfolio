import styled from 'styled-components'
import imgBg from '../../images/herobg.jpg';

export const Banner = styled.div`
    background-image: linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.1)), url(${imgBg});
    min-height: 100vh;
    width: 100%;
    background-position: left;
    background-size: cover;
    display: flex;
    position: relative;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100vw;
        height: 100%;
    }
`;


export const HeroH2 = styled.h2`
    font-size: clamp(1.5rem, 2.5vw, 5rem);
    margin-bottom: 1rem;
    letter-spacing: 2px;
    color: #fff;
    font-weight: 500;
    line-height: 1;

    span{
        font-size: 3.5rem;
    }
`;

export const HeroH3 = styled.h3`
    font-size: clamp(2rem, 2.5vw, 2rem);
    margin-bottom: 2rem;
    color: #fff;
    font-weight: 400;
`;

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    font-weight: 400;
    transition: .2s ease-out;

    &:hover{
        background: #ffc500;
        transition: .2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;