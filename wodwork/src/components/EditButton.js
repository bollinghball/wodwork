import React from 'react';
import styled from 'styled-components';
import edit from '../images/edit.png';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const EditButton = styled.a`
    background-color: #1A8573;
    border-radius: 5px;
    color: #fff;
    padding: 5px 10px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #136259;
    }

`;

const Image = styled.img`
    width: 1.2rem;
`;

export default class extends React.Component {
    render () {
        return (
            <ButtonContainer >
                <EditButton>
                    <Image src={edit} alt="edit icon"/>
                </EditButton>
            </ButtonContainer>
        );
    }
}