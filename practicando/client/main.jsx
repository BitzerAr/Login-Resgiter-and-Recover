import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router,Route, hashHistory } from 'react-router'; 

import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Register from '../imports/ui/Register.jsx';
Meteor.startup(() => {
  render(
		<Router history={hashHistory}>
			<Route path="/" component={App}/>
			<Route path="/login" component={Login}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
			<Route path="/register" component={Register}/>
		</Router>
		, document.getElementById('render-target'));
});
