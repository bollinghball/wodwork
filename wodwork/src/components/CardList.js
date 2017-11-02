import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { CardContainer } from './CardContainer';
import workouts from '../workouts'

const CardList = styled.div`
    margin-bottom: 20px;
    text-align: center;
`;

const gridBreakpoints = [
    { size: "600px", cols: 2 },
    { size: "960px", cols: 4 },
    { size: "1100px", cols: 5 }
];

const EmptyList = styled.p`
font-style: italic;
margin-bottom: 20px;
padding: 20px;
text-align: center;
`;


export default class extends React.Component {
    render() {
        const {props} = this;

        if (props.workouts.length > 0) {
            return (
                <CardList className={props.className}>
                    {props.workouts.map(
                        item => {
                            console.log(item);

                            
                            return (
                                <CardContainer key={item.id}>
                                    <Card 
                                        title={item.title} 
                                        date={item.date}
                                        exercises={item.exercises}>
                                    </Card>
                                </CardContainer>
                            );
                        }
                    )}
                </CardList>
            );
        }

        else {
            return (
                <EmptyList className={props.className}>Select Add workout to get started!</EmptyList>
            );
        }
    }
}
