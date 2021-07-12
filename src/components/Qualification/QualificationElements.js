import styled from 'styled-components';
import imgBg from '../../images/pic2.jpg';

export const QualificationSection = styled.div`
    background-color: #111;
    margin: 0;
    padding: 5rem;

    @media screen and (max-width: 768px){
        padding: 2.1rem;
        margin: 0;
    }
`;


export const QualificationContent = styled.div`
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    /* row-gap: 0; */
    /* margin: 0 auto; */
    width: 100%;

    @media screen and (max-width: 768px){
        /* flex-direction: column-reverse; */
    }
`;
export const QualificationData = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    /* margin: auto; */
    /* background-color: #333; */
`;

export const Calendar = styled.div`
    /* font-size: 1rem; */
    /* display: flex; */
    justify-content: space-between;
    /* margin: 0 1rem; */
    align-items: center;
    cursor: pointer;
    color: #999;
`;

export const DivData = styled.div`
    /* flex: 1; */
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    /* margin: 0 auto; */
    /* overflow: hidden; */
    & span{
        color: #999;

        
    }

    & .name{
        margin: .5rem 0;
        color: #999;
        font-family: Montserrat;
        font-weight: 400;
        font-size: .96rem;
    }

    & .qualification__rounder{
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: #999;
        border-radius: 50%;
    }

    & .qualification__line{
        display: block;
        width: 1px;
        height: 100%;
        background-color: #999;
        transform: translate(6px, -7px);
    }
    
    @media screen and (max-width: 768px){
        /* flex-direction: column-reverse; */
    }
`;

export const QualificationTabs = styled.div`
    display: flex;
    /* justify-content: space-between; */
    text-align: center;
    padding: .5rem 0;
    color: #999;
    /* margin: auto; */
    /* width: 13rem; */
        justify-content: center;
    & span{
        margin: auto 0;
    }
    
    
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

export const TabButton = styled.div`
        /* font-size: 1.2rem; */
        
        /* display: flex; */
        /* flex: 1; */
        /* height: ${({skillsOpen}) => (skillsOpen ? '0' : 'aut0')}; */
        /* overflow: hidden; */
        /* margin: auto; */
        padding: .6rem;
        background-color: #222;
        margin: 0 .2rem;
        transition: .3s ease-in;

        & span{
            font-size: 1.2rem;
            font-weight: 500;
            margin-left: .7rem;
        }
        @media screen and (max-width: 768px){
            flex: 100%;
            flex-direction: column-reverse;
        }

        @media screen and (max-width: 400px){
            margin: 0;
        }

`;

export const SkillsData = styled.div`
        /* display: flex; */
        /* flex: 1; */
        /* margin: auto 1rem; */

        @media screen and (max-width: 768px){
            flex: 100%;
            flex-direction: column-reverse;
        }

        @media screen and (max-width: 400px){
            margin: 0;
        }

`;

export const SkillsBar = styled.div`
        /* display: flex; */
        /* flex: 1; */
        overflow: hidden;
        margin: auto 1rem;
        /* padding: 1rem 0; */

        &.skills__bar, .skills__percentage{
            height: 5px;
            border-radius: .25rem;
        }

        &.skills__bar{
            background-color: #777;
        }

        & .skills__percentage{
            display: block;
            background-color: #e31837;
        }

        & .skills__html{
            width: 85%;
            /* background-color: red; */
        }

        & .skills__css{
            width: 80%;
            /* background-color: red; */
        }

        & .skills__react{
            width: 90%;
            /* background-color: red; */
        }
        & .skills__nodejs{
            width: 50%;
            /* background-color: red; */
        }
        & .skills__php{
            width: 70%;
            /* background-color: red; */
        }
        & .skills__firebase{
            width: 40%;
            /* background-color: red; */
        }
        & .skills__adobexd{
            width: 85%;
            /* background-color: red; */
        }
        & .skills__figma{
            width: 70%;
            /* background-color: red; */
        }
        & .skills__adobephotoshop{
            width: 90%;
            /* background-color: red; */
        }
        & .skills__adobeillustrator{
            width: 80%;
            /* background-color: red; */
        }


        @media screen and (max-width: 768px){
            flex: 100%;
            flex-direction: column-reverse;
        }

        @media screen and (max-width: 400px){
            margin: 0;
        }

`;

export const H1Skills = styled.h1`
    font-size: 1.8rem;
    color: #e31837;
    & span{
        font-size: 1.5rem;
        color: #666;
    }
`;

export const H3Skills = styled.h3`
    
`;
