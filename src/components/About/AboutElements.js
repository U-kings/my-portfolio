import styled from 'styled-components';
import imgBg from '../../images/product-2.jpg';

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
    margin: 0;
`;
export const AboutP = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    height: 20rem;
    overflow: hidden;
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: 15rem;
        margin-bottom: 2rem;
    }
`;

export const ContextBox = styled.div`
        /* display: flex; */
        flex: 50%;
        overflow: hidden;

        @media screen and (max-width: 768px){
            flex: 100%;
            flex-direction: column-reverse;  
        }
`;
export const ImageContainer = styled.div`
    background-image: linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.1)), url(${imgBg});
    min-height: 25rem;
    /* min-width: 10rem; */
    background-size: cover;
    transition: .4s ease-in-out;

    &:hover{
        /* -webkit-transform: scale(1.1) rotate(45deg); */
        transform: scale(1.1);
    }
`;
