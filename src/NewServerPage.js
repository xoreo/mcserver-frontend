import React, { Component } from 'react';
import './css/NewServerPage.css';
import net from './net/net';

class NewServerPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            version: '1.12',
            port: '',
            ram: '',
            
            response: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        fetch(
            net.endpoint('createServer'),
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    version: this.state.version,
                    port: this.state.port,
                    ram: this.state.ram,
                })
            }
        ).then(res => res.json())
        .then(res => {
            if (res.error) {
               console.error(res.error);
               return;
            }
            console.log(JSON.stringify(res));

            this.setState({response: res});
        });

        e.preventDefault();
    }
        
    render() {
        return (
            <div className="fr-container main">
            {console.log(this.state)}
                <div className="header">Create a new server</div>

                <form className="fr-container" onSubmit={this.handleSubmit}>
                    
                    <label><b>Name</b></label>
                    <input
                        onChange={e => {this.setState({name: e.target.value})}}
                        value={this.state.name}
                        className="fr-input fr-border fr-round-large" type="text" />

                    <label><b>Version</b></label><br />
                    <select
                        className="fr-select fr-border fr-round-large version-select"
                        onChange={e => {this.setState({version: e.target.value})}}>1.12
                        
                        <option disabled>Choose Version</option>
                        <option
                            defaultValue="1.12">1.12
                        </option>
                        <option
                            defaultValue="1.8">1.8
                        </option>
                        <option
                            defaultValue="1.7.2">1.7.2
                        </option>
                        <option
                            defaultValue="1.2.1">1.2.1
                        </option>
                    </select><br />

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
                    
                    <button type="submit">Create Server</button>

                </form>
            </div>
        );
    }
}

export default NewServerPage;