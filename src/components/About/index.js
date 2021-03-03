import React from 'react'
import { Section, Container, Heading, HeadingH2 } from '../Library/library'
import { AboutContent, ContextBox, AboutH3, AboutP, ImageContainer } from './AboutElements'

const About = () => {
    return (
        <>
        <Section>
                <Heading>
                    <HeadingH2>About Me</HeadingH2>
                </Heading>
                <Container>
                <AboutContent>
                    <ContextBox >
                        <AboutH3>I'm a Software Engineer.</AboutH3>
                        <AboutP>
                        I love building awesome softwares. I've built different kinds of websites, from Landing pages, School and hospital management systems to e-commerce webapps. and even corporate software. I'm here to help software startups get off the ground. I enjoy growing teams, learning, teaching engineers and collaborating to find solutions to real-world problems.
                        If you are interested, you can view some of my favorite projects in my portfolio down below.
                        Do you need something built or simply want to have a chat? Please do reach out to me on my social media or send me an email.
                        </AboutP>
                    </ContextBox>
                    <ContextBox>
                        <ImageContainer className="rotate"></ImageContainer>
                    </ContextBox>
                </AboutContent>
                </Container>
                </Section>
        </>
    )
}

export default About
