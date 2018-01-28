import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/headerComponent.js';
import PageNotFound from '../components/pageNotFound.js';
import HelpPage from '../components/helpComponent.js';
import EditExpensePage from '../components/editExpenseComponent.js';
import AddExpensePage from '../components/addExpenseComponent.js';
import ExpenseDashboardPage from '../components/dashboardComponent.js';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;