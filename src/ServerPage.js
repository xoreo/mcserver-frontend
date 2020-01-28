import React, { Component } from 'react';
import Server from './server/Server';
import net from './net/net'

class ServerWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            servers: [],
        }

        this.getServers();
    }

    getServers() {
        fetch(
            net.endpoint('getAllServers'), // Get the endpoint
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(res => res.json()) // Handle the Promise
        .then(res => {
            // Check error
            if (res.error) {
                console.log(res.error);
                return;
            }

            console.log(res.servers);

            // Update the state with the response
            this.setState({
                servers: res.servers,
            });
        });
    }

    render() {
        return (
            <div className="fr-container main">

                <div className="header">My Servers</div>
                {
                    this.state.servers.map(
                        server_ => <Server server={server_} key={server_['id']}/>
                    )
                }
            
            </div>
        );
    }
}

export default ServerWindow;