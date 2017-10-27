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

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: this.props.workouts
        };
    }

    render() {
        return (
            <Main>
                <Container>
                    <CardList workouts={this.props.workouts} />
                </Container>
            </Main>
        );
    }
}
