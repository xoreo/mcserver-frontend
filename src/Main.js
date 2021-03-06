import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import OverviewPage from './OverviewPage';
import ServerPage from './ServerPage';
import NewServerPage from './NewServerPage';
import ServerManager from './servermanager/ServerManager';

class Main extends Component {
    render() {
        return ( 
            <Switch>
                <Route exact path="/" component={OverviewPage} />
                <Route path="/servers" component={ServerPage} />
                <Route path="/new" component={NewServerPage} />
                <Route path="/manage/:id" component={ServerManager} />
            </Switch>
        );
    }
}

export default Main;