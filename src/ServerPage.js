import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import ServerWindow from './server/ServerWindow';

class ServerPage extends Component {
    render() {
        return (
            <div className="fr-row">
                <SideBar />
                <ServerWindow />
            </div>
        );
    }
}

export default ServerPage;