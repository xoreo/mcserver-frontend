import React, { Component } from 'react';

class ValueField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.item[1],
        };

        this.capitalize = this.capitalize.bind(this);
    }

    capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }

    render() {
        return (
            <div>
                <label>{this.capitalize(this.props.item[0])}</label>
                <input
                    onChange={e => {this.setState({value: e.target.value})}}
                    value={this.state.value}
                    className="fr-input fr-border fr-round-large" type="text" />
            </div>
        );
    }
}

export default ValueField;