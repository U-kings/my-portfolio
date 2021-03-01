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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut voluptatibus perferendis nesciunt ex quasi earum fuga exercitationem, nam accusamus repellendus nihil soluta quas facilis dolores sunt molestiae nemo maxime tempora voluptates nobis nostrum incidunt sint mollitia? Consectetur esse, id provident facilis fugiat odit commodi delectus eligendi, quam harum minima.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut voluptatibus perferendis nesciunt ex quasi earum fuga exercitationem, nam accusamus repellendus nihil soluta quas facilis dolores sunt molestiae nemo maxime tempora voluptates nobis nostrum incidunt sint mollitia? 
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
