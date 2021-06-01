import React, {useState} from 'react'
import Navbar from '../Navbar';
import {FlexSwitch, NavLink, TextContainer, HeroContainer, ImageContainer, Image, SocailContainer, IconContainer, HeroH2, HeroH4, HeroBtn, HeroSection} from './HeroElements';
// import { Container } from "../Library/library";
import { FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <IconContext.Provider value={{ color: "white", size: "1.4em", className: "global-class-name" }}>
            <HeroSection>
                <Navbar toggle={toggle} isOpen={isOpen} />
                    <HeroContainer>
                        <SocailContainer>
                            <IconContainer>
                                <NavLink to="/"><FaLinkedinIn/></NavLink>
                            </IconContainer>
                            <IconContainer>
                                <NavLink to="/"><FaDribbble /></NavLink>
                            </IconContainer>
                            <IconContainer>
                                <NavLink to="/"><FaGithub /></NavLink>
                            </IconContainer>
                        </SocailContainer>
                        <FlexSwitch>
                            <TextContainer>
                                <HeroH2>Hi, I'am <br /><span>Uchenna Igbokwe.</span> </HeroH2>
                                <HeroH4>I'm a Software Engineer.</HeroH4>
                                <HeroBtn>About Me</HeroBtn>
                            </TextContainer>
                            <ImageContainer>
                                <Image>
                                </Image>
                            </ImageContainer>
                        </FlexSwitch>
                            
                    </HeroContainer>
            </HeroSection>
        </IconContext.Provider>
    )
}

export  default Hero;