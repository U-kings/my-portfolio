import React from 'react'
import { Container, Heading, HeadingH2, HeadingP } from '../Library/library'
import { AboutSection, AboutContent, ContextBox, AboutH3, AboutP, ImageContainer } from './AboutElements'

const About = () => {
    return (
        <>
            <Container>
                <AboutSection>
                    <Heading>
                        <HeadingH2>About Me</HeadingH2>
                        <HeadingP>My Introduction</HeadingP>
                    </Heading>
                    <AboutContent>
                        <ContextBox >
                            <ImageContainer></ImageContainer>
                        </ContextBox>
                        <ContextBox >
                            <AboutH3>I'm a Software Engineer.</AboutH3>
                            <AboutP>
                            I love building awesome softwares. I've built different kinds of websites, from Landing pages, School and hospital management systems to e-commerce webapps. and even corporate software. I'm here to help software startups get off the ground. I enjoy growing teams, learning, teaching engineers and collaborating to find solutions to real-world problems.
                            If you are interested, you can view some of my favorite projects in my portfolio down below.
                            Do you need something built or simply want to have a chat? Please do reach out to me on my social media or send me an email.
                            </AboutP>
                        </ContextBox>
                    </AboutContent>
                </AboutSection>
            </Container>
        </>
    )
}

export default About
