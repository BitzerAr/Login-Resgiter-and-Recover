import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router,Route, hashHistory } from 'react-router'; 
export default React.createClass(
		{
		render(){
			return(
					<div className="container">
					<header>
					<h1>UserOptions</h1>
					<a class="btn" href="#/user/logout"><button>logout</button></a>
					<a class="btn" href="#/user/changepassword"><button>Change Password</button></a>
					</header>
					</div>
					);
		}
});
