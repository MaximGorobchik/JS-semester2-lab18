import React from 'react'

class ShowInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ivan', age: 25, showInfo: false };
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo() {
        this.setState({ showInfo: !this.state.showInfo });
    }
    render() {
        return (
            <div>
                {this.state.showInfo && (
                    <p>
                        Name: {this.state.name}, Age: {this.state.age}
                    </p>
                )}
                <div>
                    <button onClick={this.showInfo}>{this.state.showInfo ? 'hide': 'show'}</button>
                </div>
            </div>
        );
    }
}
export default ShowInfo;