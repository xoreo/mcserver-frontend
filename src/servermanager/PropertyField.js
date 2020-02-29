import React, { Component } from 'react';

class PropertyField extends Component {
    render() {
        return (
            <div>
                {this.props.property}
            </div>
        );
    }
}

export default PropertyField;