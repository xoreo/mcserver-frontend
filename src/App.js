import React, { Component } from 'react';
import Main from './Main';
import SideBar from './sidebar/SideBar';
// import './SideBar.css';

class App extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <Main />
            </div>
        )
    }
}

export default App;