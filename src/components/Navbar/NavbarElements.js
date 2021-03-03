import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';


export const Nav = styled.nav`
    position: fixed;
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    align-items: center;
    justify-content: space-between;
    /* padding: 40px 100px; */
    padding: 0px 100px;
    background-color: #111;

    /* &.sticky{
        background: #000;
        padding: 20px 100px;
    } */
`;

export const NavLogo = styled.div`
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 1.5rem;

    
    @media screen and (max-width: 768px){
        position: fixed;
        display: flex;
        align-items: center;
        padding: 1rem 2.5rem;
        top: 0;
        right:0;
        left: 0;
        width: 100%;
        align-self: center;
        background-color: #111;
    }
    @media screen and (max-width: 400px){
        padding: 1rem 1.2rem;
    }
`;
export const NavItem = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;

    
    @media screen and (max-width: 768px){
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        /* width: 100%; */
        margin-top: 3.9rem;
        /* padding: 4rem 0; */
        padding: 0;
        background-color: rgba(0, 0, 0,.97);
        /* left: 0; */
        transition: .3s ease-in-out;
        left: ${({isOpen}) => (isOpen ? '0' : '1000px')};
        right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};
    }
`;

export const NavList = styled.li`
    position: relative;
    list-style: none;

    @media screen and (max-width: 768px){
        margin: .1rem 0;
        /* background-color: orange; */
        width: 100%;
        text-align: center;
        padding: 1.5rem 0;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1rem;
    display: inline-block;
    margin: 0 15px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    transition: .2s ease-in-out;

    &.last-link{
        margin: 0;
    }

    &:hover{
        color: #e31837;
    }

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`;

export const NavIcon = styled.div`
    display: none;
    position: absolute;
    top: 0;
    padding: 1.5rem; 
    right: 0;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
    }
`;