import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Router,Route, hashHistory } from 'react-router'; 
export default React.createClass(
		{
		handleSubmit(event) {

		event.preventDefault();
		const oldPassword = ReactDOM.findDOMNode(this.refs.password).value.trim();
		const newPassword = ReactDOM.findDOMNode(this.refs.newpassword).value.trim();
		const newPasswordConfirm = ReactDOM.findDOMNode(this.refs.newpasswordconfirm).value.trim();
		if(newPassword==newPasswordConfirm)	
				Accounts.changePassword( oldPassword , newPassword, (error)=>{ 
					if(!error)
						window.location='#/user';
					else
						alert('error');
					} );

		},
		render(){
			return(
					<div className="container">
					<header>
					<h1>Change Pasword</h1>
					<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
					<ul>Type Current Pasword<input
					type="password"
					ref="password"
					placeholder="Current Password"
					required
					/></ul>
					<ul>Type New Password<input
					type="password"
					ref="newpassword"
					placeholder="New Password"
					required
					/></ul> 
					<ul>Confirm New Password<input
					type="password"
					ref="newpasswordconfirm"
					placeholder="Confirm Password"
					required
					/></ul> 
					<ul>	
					<input type="submit" value="Change Password"/>
					</ul>
					</form>
					</header>
					</div>
					);
		}
});
