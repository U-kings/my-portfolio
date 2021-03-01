import React from 'react'
import { HeadingH2, Heading, Section } from '../Library/library';
import { WorkContainer, ImageBox, WorkContent, WorkBox } from './WorkElements';

const Work = () => {
    return (
        <>
            <Section>
                <Heading className="work-heading">
                    <HeadingH2>My Latest Works</HeadingH2>
                </Heading>
                <WorkContent>
                    <ImageBox>1</ImageBox>
                    <ImageBox>2</ImageBox>
                    <ImageBox>3</ImageBox>
                    <ImageBox>4</ImageBox>
                </WorkContent>
            </Section>
        </>
    )
}

export default Work;
