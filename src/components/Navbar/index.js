import React from 'react'
import { Nav, NavIcon, NavLogo, NavItem, NavList, NavLink} from './NavbarElements';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = ({isOpen, toggle}) =>{
    // window.addEventListener('scroll', function(){
    //     var header = document.querySelector('header');
    //     header.className.toggle('sticky',window.screenY > 0)
    // })

    

    
    return(
            <Nav className={`nav-header ${window.screenY > 0 ? "sticky" : "sticky"}`} >
                <NavLogo to='/'>Portfolio</NavLogo>
                <NavIcon isOpen={isOpen} onClick={toggle}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </NavIcon>
                <NavItem isOpen={isOpen} onClick={toggle}>
                    <NavList><NavLink to="/">Home</NavLink></NavList>
                    <NavList><NavLink to="/">About</NavLink></NavList>
                    <NavList><NavLink to="/">Services</NavLink></NavList>
                    <NavList><NavLink to="/">Testimonial</NavLink></NavList>
                    <NavList><NavLink className="last-link" to="/">Contact</NavLink></NavList>
                </NavItem>
            </Nav>
    )
}

export default Navbar;