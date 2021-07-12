import styled from 'styled-components';
import imgBg from '../../images/pic2.jpg';

export const AboutSection = styled.div`
    background-color: #111;
    margin: 0;
    padding: 5rem;

    @media screen and (max-width: 768px){
        padding: 2.1rem;
        margin: 0;
    }
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
    color: #e31837;
`;
export const AboutP = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8rem;
    /* overflow: hidden; */
    padding: .5rem 1rem;
    color: #999;
    /* background-color: rgba(255, 255, 0, .9); */
    background-color: #222;
    
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
    background-image: url(${imgBg});
    background-repeat: no-repeat;
    min-height: 24rem;
    background-size: 35rem;
    background-position-x: 0;
    background-position-y: -3rem;
    border-radius: 50px;
    
    transition: .35s ease-out;
        transform: scale(1.1);
    

    &:hover{
        /* -webkit-transform: scale(1.1) rotate(45deg); */
        transform: scale(1.14);
    }
`;
