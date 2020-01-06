import React, { Component } from 'react';
import './Item.css';

class BottomItem extends Component {
    render() {
        return (
            <div className="navitem-container">
                <li>
                    <a className="navitem bottom" href={this.props.url}>{this.props.text}</a>
                </li>
            </div>
        );
    }
}

export default BottomItem;