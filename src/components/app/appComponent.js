import React, { PropTypes } from 'react';
import Header from '../common/header/headerComponent';

function App(props) {
    return (
        <div className="app">
            <Header />
            {props.children}
        </div>
    );
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
