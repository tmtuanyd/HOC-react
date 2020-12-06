import React, {Component} from 'react';
import withCounter from "./withCounter";

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1>Cai nay la vi du</h1>
                <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h2>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 1);