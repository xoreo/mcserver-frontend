import React, { Component } from 'react';
import Item from './Item';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="fr-container">
                <div className="sidebar">

                    <ul className="fr-ul">
                        <Item text="Overview" url="/" />
                        <Item text="My Servers" url="/servers" />
                    </ul>

                </div>
            </div>
        );
    }
}

export default SideBar;