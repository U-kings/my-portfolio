import React from 'react'
import { Container, Heading, HeadingH2, TextH3, HeadingP } from '../Library/library'
import { TestimonialContent, TestimonialBox } from './TestimonialElements'

function Testimonial() {
    return (
        <>
            <Container className="testimonial">
                <Heading>
                    <HeadingH2>Testimonial</HeadingH2>
                    <HeadingP>Lorem ipsum dolor sit amet, consector adipisincing elit.</HeadingP>
                </Heading>
                <TestimonialContent>
                    <TestimonialBox>
                        <HeadingP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut voluptatibus perferendis nesciunt ex quasi earum fuga exercitationem, nam accusamus repellendus nihil soluta quas facilis dolores sunt molestiae nemo maxime tempora voluptates nobis nostrum incidunt sint mollitia? Consectetur esse, id provident facilis fugiat odit commodi delectus eligendi, quam harum minima.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut voluptatibus perferendis nesciunt ex quasi earum fuga exercitationem? 
                        </HeadingP>
                        <TextH3 className="testimonialH3">Someone Famous<br /><span>Creative Designer</span></TextH3>
                    </TestimonialBox>
                    <TestimonialBox>
                        <HeadingP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut voluptatibus perferendis nesciunt ex quasi earum fuga exercitationem, nam accusamus repellendus nihil soluta quas facilis dolores sunt molestiae nemo maxime tempora voluptates nobis nostrum incidunt sint mollitia? Consectetur esse, id provident facilis fugiat odit commodi delectus eligendi, quam harum minima.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ut voluptatibus perferendis nesciunt ex quasi earum fuga exercitationem? 
                        </HeadingP>
                        <TextH3 className="testimonialH3">Someone Famous<br /><span>Creative Designer</span></TextH3>
                    </TestimonialBox>
                </TestimonialContent>
            </Container>  
        </>
    )
}

export default Testimonial
