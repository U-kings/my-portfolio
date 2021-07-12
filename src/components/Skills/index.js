import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaAngleDown, FaDesktop, FaPenNib, FaToolbox } from 'react-icons/fa'
import { Container, Heading, HeadingH2, HeadingP } from '../Library/library'
import {SkillsDropDown, SkillsSection, SkillsContent, SkillsContainer, SkillsHeader, SkillsList, SkillsTitle, SkillsBar, SkillsData, H1Skills, H3Skills } from './SkillsElements'

const Skills = () => {

    // const skillsContent = document.getElementsByClassName('skills__content'),
    //       skillsHeader = document.querySelectorAll('.skills__header')

    // function toggleSkills(){
    //     let itemClass = document.parentNode.className

    //     for(let i = 0; i < SkillsContent.length; i++){
    //         skillsContent[i].className = 'skill__content skills__close'
    //     }
    //     if(itemClass === 'skills_content skills__close'){
    //         document.parentNode.className = 'skills__content skills__open'
    //     }
    // }

    // skillsHeader.forEach((el) =>{
    //     el.addEventListener('click', toggleSkills);
    // })
    const [skillsOpen, setSkillsOpen] = useState(false);
    const skillsToggle = () => {
        setSkillsOpen(!skillsOpen);
    }

    return (
        <IconContext.Provider value={{ color: "white", size: "1.4em", className: "global-class-name" }}>
        <>
            <Container>
                <SkillsSection>
                    <Heading>
                        <HeadingH2>Skills</HeadingH2>
                        <HeadingP>My Technical Level</HeadingP>
                    </Heading>
                    <SkillsContainer>
                        <SkillsContent className="skills__content skills__open">
                            <SkillsHeader onClick={skillsToggle} className="skills__header">
                                <FaDesktop />
                                <H1Skills>Frondend Developer</H1Skills>
                                <FaAngleDown className="skills__arrow"/>
                            </SkillsHeader>
                            <SkillsDropDown>
                            <SkillsList skillsOpen={skillsOpen} className="skills__list">
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Html</H3Skills>
                                        <span>85%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__html"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Css</H3Skills>
                                        <span>80%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__css"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>React</H3Skills>
                                        <span>90%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Javascript</H3Skills>
                                        <span>90%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </SkillsBar>
                                </SkillsData>
                            </SkillsList>
                            </SkillsDropDown>
                        </SkillsContent>
                        <SkillsContent className="skills__content skills__close">
                            <SkillsHeader className="skills__header">
                                <FaToolbox/>
                                <H1Skills>Backend Developer</H1Skills>
                                <FaAngleDown className="skills__arrow"/>
                            </SkillsHeader>
                            <SkillsList className="skills__list">
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Node Js</H3Skills>
                                        <span>50%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__nodejs"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Php</H3Skills>
                                        <span>70%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__php"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Firebase</H3Skills>
                                        <span>40%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__firebase"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Javascript</H3Skills>
                                        <span>90%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </SkillsBar>
                                </SkillsData>
                            </SkillsList>
                        </SkillsContent>
                        <SkillsContent className="skills__content skills__close">
                            <SkillsHeader className="skills__header">
                                <FaPenNib />
                                <H1Skills>UI <span>&</span> UX Designer</H1Skills>
                                <FaAngleDown className="skills__arrow"/>
                            </SkillsHeader>
                            <SkillsList className="skills__list">
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Adobe XD</H3Skills>
                                        <span>85%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__adobexd"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Figma</H3Skills>
                                        <span>70%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__figma"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Adobe Photoshop</H3Skills>
                                        <span>90%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__adobephotoshop"></span>
                                    </SkillsBar>
                                </SkillsData>
                                <SkillsData>
                                    <SkillsTitle>
                                        <H3Skills>Adobe Illustrator</H3Skills>
                                        <span>80%</span>
                                    </SkillsTitle>
                                    <SkillsBar className="skills__bar">
                                        <span className="skills__percentage skills__adobeillustrator"></span>
                                    </SkillsBar>
                                </SkillsData>
                            </SkillsList>
                        </SkillsContent>
                    </SkillsContainer>
                </SkillsSection>
            </Container>
        </>
        </IconContext.Provider>
    )
}

export default Skills
