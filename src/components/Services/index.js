import React from 'react'
import { ServicesContainter ,ServicesBox, ServicesContent} from './ServicesElements'
import {Heading, HeadingH2, HeadingP} from '../Library/library'
import {FaBiohazard, FaUnlock} from 'react-icons/fa';

const Services = () => {
    return (
        <>
            <ServicesContainter>
                <Heading className="white">
                    <HeadingH2 className="white" >Services</HeadingH2>
                    <HeadingP className="white">The Terms and Conditions of out Services can be seen on the next page</HeadingP>
                </Heading>
                <ServicesContent >
                    <ServicesBox>
                        <FaBiohazard />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaBiohazard />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaBiohazard />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaBiohazard />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaBiohazard />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaBiohazard />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    </ServicesBox>
                </ServicesContent>
            </ServicesContainter>
        </>
    )
}

export default Services
