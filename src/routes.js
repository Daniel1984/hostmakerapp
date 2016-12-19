import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/appComponent';
import Properties from './components/properties/propertiesComponent';
import PropertiesRoute from './components/propertiesRoute/propertiesRouteComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Properties} />
        <Route path="propertiesroute" component={PropertiesRoute} />
    </Route>
);
