import React, { Component } from 'react';
import "./css/NewServerPage.css"

class NewServerPage extends Component {
    render() {
        return ( 
            <div className="fr-container main">
                <div className="header">Create a new server</div>

                <form className="fr-container">
                    
                    <label><b>Name</b></label>
                    <input className="fr-input fr-border fr-round-large" type="text" />

                    <label><b>Version</b></label>
                    <input className="fr-input fr-border fr-round-large" type="text" />
                    
                    <label><b>Port</b></label>
                    <input className="fr-input fr-border fr-round-large" type="text" />
                    
                    <label><b>RAM (MB)</b></label>
                    <input className="fr-input fr-border fr-round-large" type="text" />

                </form>
            </div>
        );
    }
}

export default NewServerPage;