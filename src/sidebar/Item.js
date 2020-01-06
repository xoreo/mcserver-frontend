import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <div className="navitem-container">
                <Link to={this.props.url}>
                    
                    <li>
                        <div className="navitem">
                            {this.props.text}
                        </div>
                    </li>

                </Link>
            </div>
        );
    }
}

export default Item;