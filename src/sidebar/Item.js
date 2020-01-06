import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <div className="navitem-container">
                <li>
                    <a className="navitem" href={this.props.url}>{this.props.text}</a>
                </li>
            </div>
        );
    }
}

export default Item;