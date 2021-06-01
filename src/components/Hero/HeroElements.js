import { Link } from 'react-router-dom';
import styled from 'styled-components'
import imgBg from '../../images/herobg.jpg';
import imgProfile from '../../images/profile.jpg';

export const HeroContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    /* background-color: red; */

    @media screen and (max-width: 768px){
        
    }
`;

export const FlexSwitch = styled.div`
    display: flex;
    /* flex-direction: row-reverse; */
    margin: auto 3.2rem;
    padding-top: 7rem;
    width: 100%;

    @media screen and (max-width: 768px){
        display: block;
        margin: auto;
        padding-left: 3rem;
        padding-right: 3rem;
    }

`;

export const ImageContainer = styled.div`
    /* margin: auto; */
    padding: 0;
    width: 50%;
    align-self: center;


    @media screen and (max-width: 768px){
        margin-top: 4rem;
        align-self: center;
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    align-items: center;
    padding: 0;
    margin: auto;
    /* background-color: #e31837; */
    background: url(${imgProfile});
    background-size: 15rem;
    background-position-y: -3.3rem;
    background-repeat: no-repeat;
    position: relative;
    transition: .3s ease-in;

    &::before{
        content: " ";
        width: 17rem;
        height: 17rem;
        left: 0%;
        top: 50%;
        transform: translate(-7%, -50%);
        position: absolute;
        border-radius: 50%;
        background-color: transparent;
        /* border: 4px solid #e31837; */
        border: 4px solid #fff;
        opacity: .1;
    }

    &:hover{
        background-size: 15.5rem;
        background-position-y: -3.8rem;
        background-position-x: -.5rem;
    }

    @media screen and (max-width: 768px){
        width: 15rem;
        height: 15rem;
    }
`;

export const TextContainer = styled.div`
    margin: 3rem;
    /* background-color: orange; */
    /* width: 47rem; */
    width: 50%;

    @media screen and (max-width: 768px){
        margin: 1rem 0;
        width: 100%;
    }
`;

export const SocailContainer = styled.div`
    /* background-color: green; */
    margin: auto 0;
    position: fixed;
    top: 15rem;
    background-color: #222;
    z-index: 50;

    @media screen and (max-width: 768px){
        margin: 1rem 0;
        /* width: 100%; */
    }
    
`;

export const NavLink = styled(Link)`
    font-size: .9rem;
    display: inline-block;
    margin: 0 15px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    transition: .3s ease-in;

    &.last-link{
        margin: 0;
    }

    /* &:hover{
        font-size: 1.2rem;
        color: #e31837;
    } */

    @media screen and (max-width: 768px){
        margin: 0 .6rem
    }
`;

export const IconContainer = styled.div`
    padding: .5rem;

    @media screen and (max-width: 768px){
        /* padding: 0; */
        padding: .5rem 0;
    }
`;

export const HeroSection = styled.div`
    /* background-image: linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.1)), url(${imgBg}); */
    min-height: 100vh;
    background-color: transparent;
    width: 100%;
    /* background-position: left; */
    /* background-size: cover; */
    /* display: flex; */
    /* position: relative; */
    /* align-items: center; */

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
        font-size: clamp(3.5rem, 2.5vw, 5rem);
        /* font-size: 3.5rem; */
        @media screen and (max-width: 768px){
            font-size : clamp(3.8rem, 2.5vw, 5rem);
        }
        /* @media screen and (max-width: 768px){
            font-size : clamp(1.8rem, 2.5vw, 5rem);
        } */
    }

    @media screen and (max-width: 768px){
        font-size: clamp(2.5rem, 2.5vw, 5rem);
    }

    /* @media screen and (max-width: 400px){
        font-size: clamp(1.5rem, 2.5vw, 5rem);;
    } */
`;

export const HeroH4 = styled.h4`
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 2rem;
    color: #fff;
    font-weight: 400;

    @media screen and (max-width: 768px){
        font-size : clamp(2rem, 2.5vw, 5rem);
    }
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

    @media screen and (max-width: 768px){
        font-size: 1.8rem;
        /* width: 100%; */
        padding: 1rem 4rem;
    } 
`;