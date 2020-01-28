import React, { Component } from 'react';
import "./css/NewServerPage.css"

class NewServerPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            version: '',
            port: '',
            ram: '',
            
            response: {},
        };

    }

    render() {
        return (
            <div className="fr-container main">
            {console.log(this.state)}
                <div className="header">Create a new server</div>

                <form className="fr-container">
                    
                    <label><b>Name</b></label>
                    <input
                        onChange={e => {this.setState({name: e.target.value})}}
                        value={this.state.name}
                        className="fr-input fr-border fr-round-large" type="text" />

                    <label><b>Version</b></label>
                    <input
                        onChange={e => {this.setState({version: e.target.value})}}
                        value={this.state.version}
                        className="fr-input fr-border fr-round-large" type="text" />
                    
                    <label><b>Port</b></label>
                    <input
                        onChange={e => {this.setState({port: e.target.value})}}
                        value={this.state.port}
                        className="fr-input fr-border fr-round-large" type="text" />
                    
                    <label><b>RAM (MB)</b></label>
                    <input
                        onChange={e => {this.setState({ram: e.target.value})}}
                        value={this.state.ram}
                        className="fr-input fr-border fr-round-large" type="text" />
                    
                    <button>Create Server</button>

                </form>
            </div>
        );
    }
}

export default NewServerPage;