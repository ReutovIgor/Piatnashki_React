import React from 'react';
import './style.css';

class NumberElement extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log("Item: " + props.number + " pos: " + props.pos + " clickable: " + props.clickable);
        this.handleClick = function() {
            if(this.props.clickable) {
                this.props.onClick(this.props.pos);
            }
        }.bind(this);
    }
    componentWillMount() {
        console.log("Item: " + this.props.number + " pos: " + this.props.pos + " wil mount ");
    }

    componentWillReceiveProps(props) {
        console.log("Item: " + props.number + " pos: " + props.pos + " wil receive props ");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Item: " + nextProps.number + " pos: " + nextProps.pos + " wil update ");
    }

    render() {
        console.log("Item: " + this.props.number + " pos: " + this.props.pos + " rendered ");
        return <div className='numEl' data-pos={this.props.pos} onClick={this.handleClick}>{this.props.number}</div>;
    }
}

export default NumberElement;