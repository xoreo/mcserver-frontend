import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import OverviewPage from './OverviewPage';
import ServerPage from './ServerPage';
import NewServerPage from './NewServerPage';

class Main extends Component {
    render() {
        return ( 
            <Switch>
                <Route exact path="/" component={OverviewPage} />
                <Route path="/servers" component={ServerPage} />
                <Route path="/new" component={NewServerPage} />
                {/* <Route path="/new" component={NewServer} /> */}
            </Switch>
        );
    }
}

export default Main;