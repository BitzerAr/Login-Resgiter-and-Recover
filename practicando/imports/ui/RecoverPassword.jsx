
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
export default React.createClass(
		{
		handleSubmit(event) {

		event.preventDefault();
		const UserId = ReactDOM.findDOMNode(this.refs.UserId).value.trim();
		alert(UserId);
		options={};
		if (typeof UserId === 'string')
			if (UserId.indexOf('@') != -1)
				options.email=String(UserId);
		Accounts.forgotPassword(options,((error)=>{
					if(error){	
					alert(error);
					}
					else{
					window.location='/';
					}
					})) ;


		},
			render(){
				return(
						<div className="container">
						<header>
						<h1>Forgot Password?</h1>
						<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
						<ul>User  <input
						type="text"
						ref="UserId"
						placeholder="Type your UserId or Email"
						required
						/></ul>
						<ul>	
						<input type="submit" value="Send Email"/>
						</ul>
						</form>
						</header>
						</div>
					  );
			}
		});
