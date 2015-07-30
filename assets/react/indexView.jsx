'use strict';
//---------------------------------------
// App Controller View 
// One Per Server Side Route
// 
//---------------------------------------

//  --- Libraries
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Routes = Router.Routes,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    
//  --- Layout Controller View
    App = require('./pages/layout.react'),

//  --- Pages
    Dashboard = require('./pages/atlas.react'),
    TransDashboard = require('./pages/transAtlas.react')

//  --- Routes 
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="dashboard" path="/" handler={Dashboard}/>
    <Route name="TransDashboard" path="/transearch" handler={TransDashboard}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

