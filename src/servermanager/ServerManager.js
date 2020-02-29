import React, { Component } from 'react';
import PropertyEditor from './PropertyEditor'
import net from '../net/net';
import "../server/Server.css"

class ServerManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: "23c7e8e4",
            server: {},
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
                server: res.server,
            });
        }));
    }
    
    render() {
        return (
            <div className="fr-container main">
                <div className="header">{this.state.server.name}</div>
                <div className="id">{this.state.server.id}</div>
                <div className="id">{JSON.stringify(this.state.server)}</div>
                
                
                <div className="fr-row">
                    <div className="fr-col s6">

                    </div>

                    <div className="fr-col s6">
                        <PropertyEditor properties={this.state.server.properties}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default ServerManager;