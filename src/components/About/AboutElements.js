import styled from 'styled-components';
import imgBg from '../../images/product-2.jpg';

export const AboutSection = styled.div`
    background-color: #111;
    margin: 0;
    padding: 0;
`;


export const AboutContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* margin: 0 auto; */

    @media screen and (max-width: 768px){
        /* flex-direction: column-reverse; */
    }
`;
export const AboutH3 = styled.h3`
    font-size: 2rem;
    margin: 0 1rem;
`;
export const AboutP = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    /* height: 20rem; */
    /* overflow: hidden; */
    padding: .5rem 1rem;
    /* background-color: rgba(255, 255, 0, .9); */
    background-color: #ffc500;
    
    @media screen and (max-width: 768px){
        /* height: 25rem; */
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    
    @media screen and (max-width: 400px){
        margin-bottom: 2rem;
        font-size: 1.22rem;
    }
`;

export const ContextBox = styled.div`
        /* display: flex; */
        flex: 1;
        overflow: hidden;
        margin: auto 1rem;
        /* padding: 1rem 0; */

        @media screen and (max-width: 768px){
            flex: 100%;
            flex-direction: column-reverse;
        }

        @media screen and (max-width: 400px){
            margin: 0;
        }

`;
export const ImageContainer = styled.div`
    background-image: linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.1)), url(${imgBg});
    min-height: 24rem;
    background-size: cover;
    transition: .3s ease-in-out;
        transform: scale(1.1);
    

    &:hover{
        /* -webkit-transform: scale(1.1) rotate(45deg); */
        transform: scale(1.2);
    }
`;
