import React from 'react';
import styled from 'styled-components';

const ExerciseList = styled.ul``;

const Exercise = styled.li``;

const Name = styled.span``;

const Value = styled.span``;

export const Exercises = props => {

    console.log(props);

    if (!props.exercises || props.exercises.length === 0) {
        return <p>You dont has any exercises. Add some!</p>
    }
        return (
                
            <ExerciseList>
                {props.exercises.map(
                    item =>
                        <Exercise>
                            <Name>{item.id}</Name>
                            <Value>{item.value}</Value>
                        </Exercise>
                )}
            </ExerciseList>

        )
    
}

export default { Exercises }