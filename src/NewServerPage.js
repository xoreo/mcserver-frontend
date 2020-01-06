import React, { Component } from 'react';
import "./css/NewServerPage.css"

class NewServerPage extends Component {
    render() {
        return ( 
            <div className="fr-container main">
                <h1>New Server</h1>

                <div className="fr-container"> 

                        <header className="fr-container">
                            <div className="name">Create a new server</div>
                        </header>

                        <form className="fr-container">

                            <input className="fr-input" type="text" />
                            <label>Name</label>

                            <input className="fr-input" type="text" />
                            <label>Version</label>
                            
                            <input className="fr-input" type="text" />
                            <label>Port</label>
                            
                            <input className="fr-input" type="text" />
                            <label>RAM (MB)</label>

                        </form>


                </div>
            </div>
        );
    }
}

export default NewServerPage;