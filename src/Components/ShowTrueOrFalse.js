import React from 'react'

class TrueOrFalse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show:true, name: 'Ivan'};
    }
    HiOrBye() {
        if (this.state.show == true) {
            return 'Hello ' + this.state.name;
        }
        else {
            return 'Bye ' + this.state.name;
        }
    }
    render() {
        return (
            <div>
                <p>{this.HiOrBye()}</p>
            </div>
        );
    }
}
export default TrueOrFalse;