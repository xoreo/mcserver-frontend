import React, { Component } from 'react';
import ValueEditor from './ValueEditor'
import net from '../net/net';
import "../server/Server.css"

class ServerManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            properties: {},
            settings: {}
        };

        this.getServer();
    }

    getServer() {
        if (this.state.id === '') {
            return;
        }
        fetch(
            net.endpoint(`getServer/${this.state.id}`),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(res => (res.json())
        .then(res => {
            // Check error
            if (res.error) {
                console.log(res);
                return;
            }

            this.setState({
                timestamp: res.timestamp.slice(0, 19),
                id: res.id,
                properties: res.properties,
                settings: res.coreProperties,
            });
        }));
    }

    render() {
        if (!this.state.properties) {}
        // this.setState({id: this.props.match.params.id});
        return (
            <div className="fr-container main">
                
                <div className="header">{this.state.settings.name}</div>
                <div className="id">{this.state.id}</div>
                <div className="id">Server created: {this.state.timestamp}</div>
                
                <div className="fr-row">
                    <div className="fr-col s6">
                        <ValueEditor properties={this.state.settings} header="Settings" />
                    </div>

                    <div className="fr-col s6">
                        <ValueEditor properties={this.state.properties} header="Properties" />
                    </div>
                </div>

            </div>
        );
    }
}

export default ServerManager;