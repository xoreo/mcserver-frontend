import React, { Component } from 'react';
import ValueField from './ValueField';
import './ServerManager.css'

class ValueEditor extends Component {
    constructor(props) {
        super(props);

        this.getItems = this.getItems.bind(this);
    }

    getItems() {
        if (this.props.properties) {
            return Object.entries(this.props.properties);
        } else {
            return [];
        }
    }

    render() {
        return (
            <div className="valueEditor">
                <div className="header">{this.props.header}</div>
                {
                    this.getItems().map(
                        item => <ValueField item={item} key={item} />
                    )
                }
            </div>
        );
    }
}

export default ValueEditor;