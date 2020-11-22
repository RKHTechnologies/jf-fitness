import React, { FC } from 'react';
import styled from 'styled-components';
import Contact from '../Components/Contact';

const Container = styled.div`
    position: absolute;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;
`;

const ContactPage: FC = () => {
    return (
        <Container>
            <Contact />
        </Container>
    );
}

export default ContactPage;