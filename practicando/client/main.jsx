import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router,Route, hashHistory } from 'react-router';

Accounts.onResetPasswordLink((token, done) => {
		//alert('gg');
		});

import App from '../imports/ui/App.jsx';
import Login from '../imports/ui/Login.jsx';
import Register from '../imports/ui/Register.jsx';
import RecoverPassword from '../imports/ui/RecoverPassword.jsx';
import ResetPassword from '../imports/ui/ResetPassword.jsx';
import ShowUser from '../imports/ui/ShowUser.jsx';
Meteor.startup(() => {
		render(
				<Router history={hashHistory}>
				<Route path="/" component={App}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/recoverpassword" component={RecoverPassword}/>
				<Route path="/reset-password" component={ResetPassword}/>
				<Route path="/user" component={ShowUser}/>
				</Router>
				, document.getElementById('render-target'));
				if(Meteor.userId())
				window.location='#/user';
				else
				window.location='#/login';
		});
