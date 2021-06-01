import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
`;

export const Container = styled.div`
    max-height: 100;
    /* width: 100%; */
    /* background-color: red; */
    /* padding: 0rem calc((100vw - 1300px) /2); */

    &.testimonial{
        background: #f7f7f7;
    }

    &.contact{
        background-color: #111;
    }
/* 
    @media screen and (max-width: 768px){
        padding: 30px;
    }
    @media screen and (max-width: 400px){
        padding: 20px;
    }
    @media screen and (max-width: 300px){
        padding: 15px;
    } */
    
`

export const Center = styled.div`
    width: 100%;
    /* display:flex; */
`;

export const Heading = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    /* margin-top: 50px; */
    &.white{
        padding-top: 5rem;    
    }

    &.work-heading{
        margin-top: 70px;
    }
`;

export const HeadingH2 = styled.h2`
    font-weight: 700;
    font-size: 2rem;
    color: #fff;
    margin: 0;
    padding: 0;

    &.white{
        padding: 0;
        margin: 0;
        color: #fff;
    }

`;

export const TextH3 = styled.h3`
    color: #fff;
    /* margin: 0; */

    &.testimonialH3{
        margin-top: 40px;
        text-align: end;
        color: #555;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5rem;
    }

    span{
        font-size: 15px;
    }

    &.contactH3{
        margin-bottom: 0;
        line-height: 0;
        color: #fff;
        font-weight: 500;
        margin-bottom: 10px;
        font-size: 20px;
    }
`;

export const TextP = styled.p`
    font-size: 1rem;
`;

export const HeadingP = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    color: #777;
    
    &.white{
        padding: 0 1rem;
        color: #fff;
    }
`;