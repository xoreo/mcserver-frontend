import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <li>
                <a href="{this.props.url}">{this.props.text}</a>
            </li>
        );
    }
}

export default Item;