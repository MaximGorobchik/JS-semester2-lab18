import React from 'react'

class ShowName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ivan', age: 25 };
        this.showName = this.showName.bind(this);
    }
    showName() {
        alert(this.state.name);
    }
    render() {
        return (
            <div><button onClick={this.showName}>showName</button></div>
        );
    }
}
export default ShowName;