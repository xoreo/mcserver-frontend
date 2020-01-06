import React, { Component } from 'react';
import Item from './Item';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">

                <h3 className="navheader">NapCraft Hosting</h3>

                <ul className="fr-ul">
                    <Item text="Overview" url="/" />
                    <Item text="My Servers" url="/" />
                    <Item text="New Server" url="/" />
                    <Item text="Traffic" url="/" />
                    <Item text="Settings" url="/" />
                </ul>

            </div>
        );
    }
}

export default SideBar;