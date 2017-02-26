import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router,Route, hashHistory } from 'react-router';
import Logout from './UserLogout.jsx';
import UserTab from './UserTab.jsx';
import asd from './ChangePassword.jsx';
export default React.createClass(
		{
		render(){
			return(
				<Router history={hashHistory}>
				<Route path="/user" component={UserTab}/>
				<Route path="/user/logout" component={Logout}/>
				<Route path="/user/changepassword" component={asd}/>
				</Router>
					);
		}
});
