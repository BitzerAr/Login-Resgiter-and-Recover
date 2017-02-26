
import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Router,Route, hashHistory } from 'react-router'; 
export default React.createClass(
		{
		handleSubmit(event) {

		event.preventDefault();
		const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		const passwordConfirm = ReactDOM.findDOMNode(this.refs.passwordconfirm).value.trim();
		if(password==passwordConfirm)	
			Accounts.resetPassword(token, password, (err) => {
				if (err) {
					alert('Algun error con el pasword');
				} 
				else {
					window.location="#/login";
				}
				});
		},
		render(){
			return(
					<div className="container">
					<header>
					<h1>Recover Pasword</h1>
					<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
					<ul>Type Pasword<input
					type="text"
					ref="password"
					placeholder="Password"
					required
					/></ul>
					<ul>Confirm Password<input
					type="password"
					ref="paswordconfirm"
					placeholder="Confirm Password"
					required
					/></ul> 
					<ul>	
					<input type="submit" value="Login"/>
					</ul>
					</form>
					</header>
					</div>
					);
		}
});
