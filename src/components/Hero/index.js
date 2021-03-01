import React, {useState} from 'react'
import Navbar from '../Navbar';
import {HeroContent, HeroH2, HeroH3, HeroBtn, Banner} from './HeroElements';
import { Container } from "../Library/library";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
            <Banner>
                <Navbar toggle={toggle} isOpen={isOpen} />
                <Container>
                    <HeroH2>Hello, I'm <br /><span>Uchenna Igbokwe.</span> </HeroH2>
                    <HeroH3>I'm a Software Engineer.</HeroH3>
                    <HeroBtn>About Me</HeroBtn>
                </Container>
            </Banner>
    )
}

export  default Hero;