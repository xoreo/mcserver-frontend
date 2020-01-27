import React, { Component } from 'react';
import net from '../net/net';
import './Server.css';

class Server extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: '',
        };

        this.getStatus();
    }

    getStatus() {
        let id = this.props.server['id'];
        fetch(
            net.endpoint(`system/status/${id}`),
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
                console.log(res.output);
                return;
            }

            console.log(res.output);

            this.setState({
                status: res.output,
            });
        }));
    }

    displayStatus() {
        if (this.state.status === '') {
            return 'Server not initialized';
        }
        return this.state.status;
    }

    render() {
        return (
            <div className="fr-container fr-half server">
                <div className="fr-card">
                    <header className="fr-container">
                        <div className="header">{this.props.server['name']}</div>
                        <div className="id">{this.props.server['id']}</div>
                    </header>

                    <div className="fr-container">
                        <div>
                            <p>Online</p>
                            <div>RAM: {this.props.server['ram']} MB</div>
                            <div>Version: MC {this.props.server['version']}</div>
                            <div>Port: {this.props.server['port']}</div>
                            
                            <hr />
                            <p className="status">{this.displayStatus()}</p>    
                        </div>

                        <button>Edit</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Server;