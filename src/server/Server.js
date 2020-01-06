import React, { Component } from 'react';
import './Server.css';

class Server extends Component {
    render() {
        return (
            <div className="fr-container fr-half server">
                <div className="fr-card">
                    <header className="fr-container">
                        <div className="name">{this.props.server['name']}</div>
                        <div className="id">{this.props.server['id']}</div>
                    </header>

                    <div className="fr-container">
                        <div>
                            <p>Online</p>
                            <div>RAM: {this.props.server['ram']} MB</div>
                            <div>Version: MC {this.props.server['version']}</div>
                            <div>Port: {this.props.server['port']}</div>
                        </div>
                        
                        <button className="status-button">View Status</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Server;