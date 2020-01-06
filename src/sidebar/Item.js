import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <div className="navitem-container">
                <li><a>
                    <Link to={this.props.url}>
                        {this.props.text}
                    </Link>
                </a></li>
            </div>
        );
    }
}

export default Item;