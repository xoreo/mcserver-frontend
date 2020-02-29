import React, { Component } from 'react';
import ValueEditor from './ValueEditor'
import net from '../net/net';
import "../server/Server.css"

class ServerManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "23c7e8e4",
            properties: {},
            settings: {}
        };

        this.getServer();
    }

    getServer() {
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
                properties: res.properties,
                settings: res.coreProperties,
                timestamp: res.timestamp
            });
        }));
    }

    render() {
        if (!this.state.properties) {}
        return (
            <div className="fr-container main">
                <div className="header">{this.state.settings.name}</div>
                <div className="id">{this.state.settings.id}</div>
                <div className="id">{JSON.stringify(this.state.timestamp)}</div>
                
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