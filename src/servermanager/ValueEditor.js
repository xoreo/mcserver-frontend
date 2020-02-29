import React, { Component } from 'react';
import ValueField from './ValueField';

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
            <div>
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