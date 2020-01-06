import React, { Component } from 'react';
import Server from './Server';
import net from '../net/net'
import './ServerWindow.css';

class ServerWindow extends Component {
    // The actual fetch code happens here

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
            <div className="serverWindow">
                <div className="fr-container">

                    <h1>My Servers</h1>
                    {
                        this.state.servers.map(
                            server_ => <Server server={server_} />
                        )
                    }
                
                </div>
            </div>
        );
    }
}

export default ServerWindow;