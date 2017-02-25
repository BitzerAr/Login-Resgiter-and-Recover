import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
export default React.createClass({
	render(){
		return(
			<div>
				<h1>Genbby </h1>
				<ul role="nav">
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
			</div>
		)
	}
});
