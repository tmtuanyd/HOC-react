import React, {Component} from 'react';
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Click {this.props.count} times</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter);