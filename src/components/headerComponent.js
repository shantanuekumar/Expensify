import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">add</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">help</NavLink> 
    </header>
);



export default Header;