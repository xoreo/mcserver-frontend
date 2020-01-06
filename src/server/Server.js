import React, { Component } from 'react';
import './Server.css';

class Server extends Component {
    render() {
        return (
            <div className="fr-card-4">
                {JSON.stringify(this.props.server)}
            </div>
        );
    }
}

export default Server;