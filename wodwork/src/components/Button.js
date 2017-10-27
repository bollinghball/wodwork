import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    background-color: #306E88;
    border-radius: 5px;
    color: #fff;
    display: ${props => props.inline ? 'inline-block' : 'block'};
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 auto;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
    width: 10rem;

    &:hover {
        background-color: #306E99;
    }
`;

export const Button = props => 
    <StyledButton {...props} href={props.url}>Add Workout</StyledButton>

export default { Button };