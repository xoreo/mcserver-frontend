import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="fr-row">
                <SideBar />

                <ServerWindow />
            </div>
        );
    }
}

export default App;