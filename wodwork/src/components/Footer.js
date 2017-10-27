import React from 'react';
import wodLogo from '../wodlogo.png'
import styled from 'styled-components';

const Footer = styled.footer`
    align-items: flex-end;
    background-color: #6EA8BA;
    border-bottom: 10px solid #306E88;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
`;

const Container = styled.div``;

const Logo = styled.img`
    display: block;
    height: 3rem;
    padding-top: 2rem;
    width: 7rem;
`;

const Copyright = styled.small`
    color: #306E88;
    font-size: 1rem;
    margin-right: 2rem;
`;

export default ({copyright}) => {
    return (
        <Footer>
            <Container>
                <Logo src={wodLogo} alt="WodWork logo" />
            </Container>
            <Copyright>{copyright}</Copyright>
        </Footer>
    );
}