import React from 'react'

class Click extends React.Component {
    showMessage() {
        alert('hello');
    }

    render() {
        return (
            <div>
                <button onClick={this.showMessage}>showMessage</button>
            </div>
        );
    }
}
export default Click;