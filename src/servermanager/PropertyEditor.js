import React, { Component } from 'react';
import PropertyField from './PropertyField';

class PropertyEditor extends Component {
    constructor(props) {
        super(props);

        this.getProperties = this.getProperties.bind(this);
    }

    getProperties() {
        if (this.props.properties) {
            console.log(Object.entries(this.props.properties));
            return Object.entries(this.props.properties);
        } else {
            return [];
        }
    }

    render() {
        return (
            <div>
                <div className="header">Properties</div>
                {
                    this.getProperties().map(
                        property => <PropertyField property={property} key={property} />
                    )
                }
            </div>
        );
    }
}

export default PropertyEditor;