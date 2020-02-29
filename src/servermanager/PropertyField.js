import React, { Component } from 'react';

class PropertyField extends Component {
    render() {
        return (
            <div>
                INNER PROPERTY: {this.props.property}
            </div>
        );
    }
}

export default PropertyField;