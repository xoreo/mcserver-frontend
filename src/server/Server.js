import React, { Component } from 'react';
import './Server.css';

class Server extends Component {
    render() {
        return (
            <div className="fr-card-4 test">
                Name: {this.props.server['name']}
                ID: {this.props.server['id']}
                
                Version: {this.props.server['version']}
                Port: {this.props.server['port']}
                RAM: {this.props.server['ram']}
            </div>
        );
    }
}

export default Server;