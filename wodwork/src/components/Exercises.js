import React from 'react';
import styled from 'styled-components';
import { getExerciseName } from '../scripts/getExerciseName';

const ExerciseList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const Exercise = styled.li`
    align-content: flex-start;
    display: flex;
    justify-content: space-between;
`;

const Name = styled.span`

`;

const Value = styled.span``;

export const Exercises = props => {

    if (!props.exercises || props.exercises.length === 0) {
        return <p>You dont has any exercises. Add some!</p>
    }
        return (
                
            <ExerciseList>
                {props.exercises.map(
                    item =>
                        <Exercise key = {item.id}>
                            <Name>
                                {getExerciseName(props.exerciseLibrary, item.id)}
                            </Name>
                            <Value>{item.value}</Value>
                        </Exercise>
                )}
            </ExerciseList>

        )
    
}

export default { Exercises }