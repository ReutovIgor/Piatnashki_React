import React from 'react';
import NumberElement from './NumberElement';
import { black } from 'ansi-colors';

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function parseNumArray(arr) {
    var pos = arr.indexOf(0);
    var row = Math.floor(pos/4);
    var column = pos - row * 4;

    var clickables = [];

    //left item
    if(column - 1 >= 0) {
        //calculate position
        clickables.push(4 * row + column - 1);
    }

    //right item
    if(column + 1 < 4) {
        clickables.push(4 * row + column + 1);
    }

    //top
    if(row - 1 >= 0) {
        clickables.push(4 * (row - 1) + column);
    }

    //bottom
    if(row + 1 < 4) {
        clickables.push(4 * (row + 1) + column);
    }

    return clickables;
}

class Field extends React.Component {
    constructor(props) {
        super(props);
        var numbers = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        this.state = {
            numbers: numbers,
            clickables: parseNumArray(numbers)
        };
        this.onClick = function(pos) {
            var arr = this.state.numbers.slice();
            var pos0 = arr.indexOf(0);
            arr[pos0] = arr[pos];
            arr[pos] = 0;
            this.setState({
                numbers: arr,
                clickables: parseNumArray(arr)
            });
        }.bind(this);
    }
    render() {
        const style = {
            position: 'relative',
            width: '222px',
            height: '222px',
            border: '2px solid black',
            'borderRadius': '10px'
        };
        var items = this.state.numbers.map( (number, pos) => {
            return number > 0 ? <NumberElement number={number} pos={pos} clickable={this.state.clickables.indexOf(pos) != -1} key={number} onClick={this.onClick}/> : '';
        });
        return <div id="field" style={style}>{items}</div>;
    }
}

export default Field;