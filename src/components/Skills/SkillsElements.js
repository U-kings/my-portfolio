import styled from 'styled-components';
import imgBg from '../../images/pic2.jpg';

export const SkillsSection = styled.div`
    background-color: #111;
    margin: 0;
    padding: 5rem;

    @media screen and (max-width: 768px){
        padding: 2.1rem;
        margin: 0;
    }
`;


export const SkillsContainer = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    /* row-gap: 0; */
    /* margin: 0 auto; */

    @media screen and (max-width: 768px){
        /* flex-direction: column-reverse; */
        display: block;
    }
`;
export const SkillsContent = styled.div`
    flex: 1;
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    /* margin: 0 auto; */
    overflow: hidden;
    &.skills__content{

        & .skills__list{
            overflow: hidden;
            opacity: 0;
            /* transform: translate(0rem, -25rem); */
            
        }

    }
    &.skills__content:hover .skills__list{
        /* height: 10rem; */
        /* transform: translate(0rem, 0rem); */
        opacity: 1;
    }
    &.skills__close .skills__list{
        /* height: 0; */
        /* height: ${({skillsOpen}) => (skillsOpen ? '0' : 'auto')}; */
        overflow: hidden;
    }

    &.skills__open .skills__list{
        /* height: max-content; */
        /* height: ${({skillsOpen}) => (skillsOpen ? '0' : 'auto')}; */
        margin-bottom: 1rem;
    }
    &.skills__open .skills__arrow{
        transform: rotate(-180deg);
    }
    @media screen and (max-width: 768px){
        /* flex-direction: column-reverse; */
    }
`;

export const SkillsDropDown = styled.div`
    overflow: hidden;
`;
export const SkillsHeader = styled.div`
    /* font-size: 2rem; */
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    align-items: center;
    cursor: pointer;
`;
export const SkillsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: .5rem 1rem;
    color: #999;

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

export const SkillsList = styled.div`
        /* display: flex; */
        /* flex: 1; */
        /* height: ${({skillsOpen}) => (skillsOpen ? '0' : 'aut0')}; */
        overflow: hidden;
        margin: auto 1rem;
        padding-bottom: 2rem;
        background-color: #222;
        /* padding: 1rem 0; */
        transition: .3s ease-in;


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
