import React, { Component } from 'react';
import Item from './Item';
import BottomItem from './BottomItem';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">

                <h3 className="navheader">NapCraft Hosting</h3>

                <ul className="fr-ul">
                    <Item text="Overview"   url="/" />
                    <Item text="My Servers" url="/servers" />
                    <Item text="New Server" url="/new" />
                    <Item text="Traffic"    url="/traffic" />
                    <Item text="Settings"   url="/settings" />
                    
                    <BottomItem text="Log Out" url="/logout" />
                </ul>

            </div>
        );
    }
}

export default SideBar;