import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
    render() {
        return (
            <form>
                <label>Exercise:
                <input type="text" placeholder="Exercise name here" />
                <input type="text" placeholder="Time or rep amount here" />
                </label>
            </form>
        );
    }
}