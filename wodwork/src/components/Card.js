import React from 'react';
import styled from 'styled-components';
import EditButton from './EditButton';
import {Exercises} from './Exercises';

const Card = styled.article`
    background-color: #fdfdfd;
    border-top: 5px solid #6CA8BB;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    max-width: 600px;
    padding: 1rem;
    position: relative;
    text-align: left;
    transition: transform 0.6s, box-shadow 0.6s;
    width: 100%;
`;

const Heading = styled.h1`
    color: #333;
    display: flex;
    font-size: 1.8rem;
    font-weight: 400;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

// const StyledExercises = styled(Exercises)`
//     border-bottom: 2px dotted #DDDDDD;
//     color: #6CA8BB;
//     font-size: 1.2rem;
//     margin-top: 0;
//     padding-bottom: .5rem;
// `;

const Date = styled.p``;

export default class extends React.PureComponent {

    render() {
        const {props} = this;
        return (
            <Card>
                <Heading>{props.title}
                    <EditButton />
                    <Date>{props.date}</Date>
                </Heading>
                <Exercises exercises={props.exercises}></Exercises>

            </Card>
        );
    }
}