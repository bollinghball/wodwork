import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './Container';
import CardList from './CardList';

const Main = styled.main`
    margin: 0 auto;
    padding-bottom: 20px;
    padding-top: 20px;
    display: block; 
`;

export default props => 
    <Main>
        <Container>
            <CardList workouts={props.workouts} exerciseLibrary={props.exerciseLibrary} />
        </Container>
    </Main>
