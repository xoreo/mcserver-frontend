import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Overview from './OverviewPage';
import ServerWindow from './server/ServerWindow';
// import NewServer from './NewServer';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Overview} />
                <Route path="/servers" component={ServerWindow} />
                {/* <Route path="/new" component={NewServer} /> */}
            </Switch>
        );
    }
}

export default Main;