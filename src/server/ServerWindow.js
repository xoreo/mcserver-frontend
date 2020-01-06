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

    // renderServer(server) {
    //     return <Server server={server}/>;
    // }

    getServers() {
        fetch(
            net.endpoint('getAllServers'), // Get the endpoint
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain' // For CORS reasons
                },
            }
        ).then(res => res.json()) // Handle the Promise
        .then(res => {
            // Check error
            if (res.error) {
                console.log(res.error);
                return;
            }

            // Update the state with the response
            this.setState({
                servers: JSON.parse(res.servers)
            });
        });
    }

    render() {
        return (
            <div>
                <p> {this.state.servers}</p>
                {/* <Server /> */}
            </div>
        );
    }
}

export default ServerWindow;