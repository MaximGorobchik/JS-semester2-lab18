import React from 'react'

class ChangeNameAndAge extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ivan', age: 25 };
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState({ name: 'Kolya', age: 30 });
    }
    render() {
        return (
            <div>
                Name: {this.state.name}, age: {this.state.age}
                <br /> <button onClick={this.changeState}>Change name and age</button>
            </div>
        );
    }
}
export default ChangeNameAndAge;