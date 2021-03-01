import React from 'react'
import { Container, Heading, HeadingH2, HeadingP, TextH3, TextP } from '../Library/library'
import { ContactContent, FormBox, Form, InputTextAreaField, ContactButton, InputField, ContactInfo, Box, ContactInfoBox, InputTextField, ContactIcon, ContactText } from './ContactElements'
import {FaMapMarkerAlt, FaPhone, FaEnvelope} from 'react-icons/fa'

function Contact() {
    return (
        <>
            <Container className="contact">
                <Heading>
                    <HeadingH2 className="white">Contact Us</HeadingH2>
                    <HeadingP className="white">Lorem ipsum dolor sit a amet, consectetur adipisicing elit</HeadingP>
                </Heading>
                <ContactContent>
                    <ContactInfo>
                        <TextH3>Contact Info</TextH3>
                        <ContactInfoBox>
                            <Box>
                                <ContactIcon><FaMapMarkerAlt /></ContactIcon>
                                <ContactText>
                                    <TextH3 className="contactH3">Address</TextH3>
                                    <TextP>4671 Sugar Camp Road, <br /> Owatonna, Minnesota, <br />55060</TextP>
                                </ContactText>
                            </Box>
                            <Box>
                                <ContactIcon><FaPhone /></ContactIcon>
                                <ContactText>
                                    <TextH3 className="contactH3">Phone</TextH3>
                                    <TextP>506-873-3749</TextP>
                                </ContactText>
                            </Box>
                            <Box>
                                <ContactIcon><FaEnvelope /></ContactIcon>
                                <ContactText>
                                    <TextH3 className="contactH3">Email</TextH3>
                                    <TextP>portfolio@gmail.ocm</TextP>
                                </ContactText>
                            </Box>
                        </ContactInfoBox>
                    </ContactInfo>
                    <FormBox>
                        <Form>
                            <TextH3>Message Me</TextH3>
                            <InputField type="text" name="" placeholder="Full Name" />
                            <InputField  type="email" name="" placeholder="Email" />
                            <InputTextAreaField className="input-text" name="" placeholder="Your Message" />
                            <InputField className="btn" type="submit" value="Send" />
                        </Form>
                    </FormBox>
                </ContactContent>
            </Container>  
        </>
    )
}

export default Contact
