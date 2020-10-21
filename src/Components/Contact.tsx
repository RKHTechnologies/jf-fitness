import React, { useState } from "react";
import styled from "styled-components";
import { colours, SharedSettings } from "../Shared/SharedStyles";
import emailjs from 'emailjs-com';
// import InfoOverlay from "./InfoOverlay";

interface sectionProps {
  dark?: boolean;
  background?: string;
}

const Section = styled.div`
    background: ${(p: sectionProps) => p.dark ? "#000" : "inherit"};
    background: ${(p: sectionProps) => p.background};
    color: ${(p: sectionProps) => p.dark ? colours.light : "inherit"};
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
    position: relative;

    &#about {
        padding-top: 130px;
    }

    @media(max-width: 1100px) {
        padding: 20px;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 100;
  font-size: 1.6em;
`;

const MainHeader = styled.h1`
  font-weight: 300;
  font-size: 3em;
  margin: 0;
  color: rgb(255 255 255 / 0.88);
  text-transform: uppercase;
  letter-spacing: 5px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
  }
`;

const SubHeader = styled.div`
  max-width: 1000px;
  margin-bottom: 40px;
  margin-top: 10px;
  color: rgb(255 255 255 / 40%);
  font-weight: 300;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 0.8em;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;

  @media(max-width: 1100px) {
    width: 95%;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;

  @media(max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;

const FormItem = styled.input`
  width: 100%;
  height: 50px;
  background: #1F1F1F;
  /* box-shadow: 0 2.8px 2.2px rgba(255, 255, 255, 0.034), 0 6.7px 5.3px rgba(255, 255, 255, 0.048), 0 12.5px 10px rgba(255, 255, 255, 0.06), 0 22.3px 17.9px rgba(255, 255, 255, 0.072), 0 41.8px 33.4px rgba(255, 255, 255, 0.086), 0 100px 80px rgba(255, 255, 255, 0.12); */
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  border: 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 0.8em;
  font-weight: 400;
  padding-top: 6px;
`;

const MultiLineForm = styled.textarea`
  width: 100%;
  height: 120px;
  background: #1F1F1F;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 14px 20px 0;
  font-size: 0.8em;
  font-weight: 400;
`;

export const SubmitButton = styled.input`
  color: #ffffffde;
  background: #ffffff29;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 12px 80px 5px;
  font-size: 0.7em;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
  }
`;

const Contact: React.FC = () => {
  // const [overlayOpen, setOverlayOpen] = useState(false);
  // const [overlayText, setOverlayText] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    let data: any = {};
    formData.forEach((value, key) => {data[key] = value});

    const returnData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }

    // emailjs.send('admin_outlook', '260_Contact', returnData, 'user_YDxgyMHIC23AXohprfLhK')
    //   .then((result) => {
    //       console.log(result.text);
    //       setOverlayOpen(true);
    //       setOverlayText("Thank you for getting in touch, we'll reply back as soon as possible")
    //   }, (error) => {
    //       console.log(error.text);
    //       setOverlayOpen(true);
    //       setOverlayText("Oops, an error occured. Please try again later, or contact us if the issue persists.")
    //   });

    // event.target.reset();
  }

  return (
    <Section>
        <Container>
          <MainHeader>Contact Us</MainHeader>
          <SubHeader>If you're looking to get involved, have any questions, or would like to book in a session - please get in touch below, and we will get back to you as soon as possible</SubHeader>

          <FormContainer onSubmit={handleSubmit}>
            <Column>
              <FormItem placeholder="Name" name="name" />
              <FormItem placeholder="Email" name="email" />
              <FormItem placeholder="Phone" name="phone" />
            </Column>

            <Column>
              <FormItem placeholder="Subject" name="subject" />
              <MultiLineForm placeholder="Your Message" name="message"></MultiLineForm>
            </Column>
            <SubmitButton type="submit" value="Send" />
          </FormContainer>

        </Container>
        {/* <InfoOverlay open={overlayOpen} close={() => setOverlayOpen(false)} text={overlayText} /> */}
    </Section>
  );
};

export default Contact;
