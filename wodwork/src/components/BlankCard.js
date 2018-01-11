import React from 'react';
import styled from 'styled-components';
import Input from "./Input";

const BlankCard = styled.article`
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

export default class extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                value: '',
                workoutList: ''     
        };
    
            this.handleChange = this.handleChange.bind(this);
            this.onAddField = this.onAddField.bind(this);
        }
    
        handleChange(e) {
            this.setState({value: e.target.value});
        }

        onAddField(e) {
            const workoutList = this.state.workoutList;
            this.setState({
                workoutList: workoutList.concat(<Input key={workoutList.length} />)
            });
        }
    
        render() {
            return (
                <BlankCard>
                    <label>
                        Workout Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Date:
                        <input type="date" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <Input />
                    <div>
                        <button onClick={this.onAddField}>Add another exercise</button>
                        {this.state.workoutList}
                    </div>
                </BlankCard>
            );
        }
    }