import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/appComponent';
import Properties from './components/properties/propertiesComponent';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Properties} />
    </Route>
);
