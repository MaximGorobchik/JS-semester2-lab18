import React from 'react'

class ShowArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {names:['Kolya', 'Vasya', 'Petya']};
    }
    render() {
        return (
            <ul>
                {this.state.names.map((names, i) => (<li key={names}>{names} - {i+1}</li>))}
            </ul>
        );
    }
}
export default ShowArray;