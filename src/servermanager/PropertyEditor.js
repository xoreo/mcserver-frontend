import React, { Component } from 'react';
import PropertyField from './PropertyField';

class PropertyEditor extends Component {
    render() {
        return (
            <div>
                <div className="header">Properties</div>
                {/* {
                    this.props.properties.map(
                        property => <PropertyField property={property}/>
                    )
                } */}
                PROPERTY: {JSON.stringify(this.props.properties)}
            </div>
        );
    }
}

export default PropertyEditor;