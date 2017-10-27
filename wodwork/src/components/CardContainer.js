import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
    @media (min-width: 768px) {
        align-items: stretch;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`;

export const CardContainer = (props) => {
    return <StyledCardContainer className={props.className} >{props.children}</StyledCardContainer>;
};


export default (props) => {
    return { CardContainer };
};