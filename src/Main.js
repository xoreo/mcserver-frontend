import React, { Component } from 'react';
import { Switch, Route, IndexRoute } from 'react-router';

import OverviewPage from './OverviewPage';
import ServerPage from './server/ServerWindow';
// import NewServer from './NewServer';

class Main extends Component {
    render() {
        return ( 
            <Switch>
                <Route exact path="/" component={OverviewPage} />
                <Route path="/servers" component={ServerPage} />
                {/* <Route path="/new" component={NewServer} /> */}
            </Switch>
        );
    }
}

export default Main;