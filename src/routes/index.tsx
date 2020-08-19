import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Dashboard from '../pages/Dashboard';
import Layout from '../layouts/Layout';
import NotFound from '../defaults/NotFound';
import Login from '../pages/Login';

export default function Routes(){
    return (
        <Layout>
            <Switch>
                <Route component={Index} path="/" exact />
                <Route component={Login} path="/login" />
                <Route component={Dashboard} path="/dashboard" />
                <Route component={NotFound} path="*" />
            </Switch>
        </Layout>
    )
}