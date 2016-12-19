import React from 'react';
import { Link } from 'react-router';
import './headerStyles.scss';

function Header() {
    return (
        <header className="header">
            <div className="header_logo"></div>
            <div className="header_links">
                <Link aria-selected={window.location.pathname == '/'} to="/">Properties</Link>
                <Link aria-selected={window.location.pathname == '/propertiesroute'} to="/propertiesroute">Routes</Link>
            </div>
        </header>
    );
}

export default Header;
