import React from 'react'
import { ServicesContainter ,ServicesBox, ServicesContent} from './ServicesElements'
import {Heading, HeadingH2, HeadingP} from '../Library/library'
import {FaBookOpen, FaUnlock, FaDesktop} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Services = () => {
    return (
        <IconContext.Provider value={{ color: "white", size: "4em", className: "global-class-name" }}>
        <>
            <ServicesContainter>
                <Heading className="white">
                    <HeadingH2 className="white" >What I Do?</HeadingH2>
                    <HeadingP className="white">Here are some of the services I provide.</HeadingP>
                </Heading>
                <ServicesContent >
                    <ServicesBox>
                        <FaBookOpen />
                        <h2>Full Stack Development</h2>
                        <p> Building responsive website front end using React-Redux.<br/>Developing mobile application using React-Native and Flutter.<br/> Creating application backend in Node, Express & Flask.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaUnlock />
                        <h2>Web Design</h2>
                        <p>Creating fully designed front-end website with good user experience taken into consideration.<br/>Bring ideals to life with well thought-out and detailed plaining.</p>
                    </ServicesBox>
                    <ServicesBox>
                        <FaDesktop />
                        <h2>UI and UX</h2>
                        <p>Designing highly attractive user interface for mobile and web applications.<br/>Creating the flow of application functionalities to optimize user experience.</p>
                    </ServicesBox>
                    {/* <ServicesBox>
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
                    </ServicesBox> */}
                </ServicesContent>
            </ServicesContainter>
        </>
        </IconContext.Provider>
    )
}

export default Services
