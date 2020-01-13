import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewServerPopup from '../NewServerPopup/NewServerPopup';
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        
        this.generatePopup = this.generatePopup.bind(this);
    }

    generatePopup() {
        switch (this.props.popup) {
            case 'new':
                return (
                    <NewServerPopup />
                );
            default:
                return 'error creating popup';
        }
    }

    checkIfPopup() {
        if (this.props.url === 'none') {
            return (
                <div onClick={this.generatePopup}>
                <li>
                    <div className="navitem">
                        {this.props.text}
                    </div>
                </li>
                </div>
            );
        } else {
            return (
                <Link to={this.props.url}>
                    <li>
                        <div className="navitem">
                            {this.props.text}
                        </div>
                    </li>
                </Link>
            );
        }
    }

    render() {
        return (
            <div className="navitem-container">
                {
                    this.checkIfPopup()
                }
            </div>
        );
    }
}

export default Item;