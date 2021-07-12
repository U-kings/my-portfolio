import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaAngleDown, FaBriefcase, FaCalendarAlt, FaDesktop, FaGraduationCap, FaPencilRuler, FaToolbox } from 'react-icons/fa'
import { Container, Heading, HeadingH2, HeadingP, TextH3 } from '../Library/library'
import {DivData, QualificationSection, QualificationContent, QualificationData, Calendar, QualificationTabs, TabButton, SkillsBar, SkillsData, H1Skills, H3Skills } from './QualificationElements'

const Qualification = () => {
    return (
        <IconContext.Provider value={{ color: "white", size: "1.4em", className: "global-class-name" }}>
        <>
            <Container>
                <QualificationSection>
                    <Heading>
                        <HeadingH2>Qualification</HeadingH2>
                        <HeadingP>My Personal Journey</HeadingP>
                    </Heading>
                    <QualificationContent>
                        <QualificationTabs>
                            <TabButton>
                                <FaGraduationCap />
                                <span>Education</span>
                            </TabButton>
                            <TabButton>
                                <FaBriefcase color="#fff" />
                                <span>Work</span>
                            </TabButton>
                        </QualificationTabs>
                        <QualificationData>
                            <DivData>
                                <TextH3> Software Enginner</TextH3>
                                <p className="name">NIIT - National Institue for Information Technology</p>
                                <Calendar>
                                    <FaCalendarAlt />
                                    2017 - 2020
                                </Calendar>
                            </DivData>
                            <DivData>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </DivData>
                        </QualificationData>
                        
                        <QualificationData>
                            <DivData>
                                <TextH3> Software Enginner</TextH3>
                                <p className="name">NIIT - National Institue for Information Technology</p>
                                <Calendar>
                                    <FaCalendarAlt />
                                    2017 - 2020
                                </Calendar>
                            </DivData>
                            <DivData>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </DivData>
                        </QualificationData>

                        <QualificationData>
                            <DivData>
                                <TextH3> Software Enginner</TextH3>
                                <p className="name">NIIT - National Institue for Information Technology</p>
                                <Calendar>
                                    <FaCalendarAlt />
                                    2017 - 2020
                                </Calendar>
                            </DivData>
                            <DivData>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </DivData>
                        </QualificationData>

                        <QualificationData>
                            <DivData>
                                <TextH3> Software Enginner</TextH3>
                                <p className="name">NIIT - National Institue for Information Technology</p>
                                <Calendar>
                                    <FaCalendarAlt />
                                    2017 - 2020
                                </Calendar>
                            </DivData>
                            <DivData>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </DivData>
                        </QualificationData>
                    </QualificationContent>
                </QualificationSection>
            </Container>
        </>
        </IconContext.Provider>
    )
}

export default Qualification
