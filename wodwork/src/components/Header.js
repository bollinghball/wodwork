import React from 'react';
import wodLogo from '../wodlogo.png'
import styled from 'styled-components';

const Header = styled.header`
    background-color: #6EA8BA;
    border-bottom: 10px solid #306E88;
    padding-bottom: 2rem;
`;

const Container = styled.div``;

const Logo = styled.img`
    display: block;
    height: 3rem;
    padding-top: 2rem;
    width: 7rem;
`;

export default () => {
    return (
        <Header>
            <Container>
                <Logo src={wodLogo} alt="WodWork logo" />
            </Container>
        </Header>
    );
}