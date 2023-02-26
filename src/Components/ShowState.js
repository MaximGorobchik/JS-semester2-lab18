import React from 'react'

class ShowState extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ivan', age: 25 };
    }
    render() {
        return (
            <div>Name: {this.state.name}, age: {this.state.age}</div>
        );
    }
}
export default ShowState;