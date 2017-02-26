import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router,Route, hashHistory } from 'react-router'; 
export default React.createClass(
		{
		handleSubmit(event) {

		event.preventDefault();
		Meteor.logout(((error)=>{
					if(error)
						alert('error');
					else
						window.location='#/login';
					}));
				},
		render(){
			return(
					<div className="container">
					<header>
					<h1>Logout</h1>
					<button onClick={this.handleSubmit.bind(this)}>logout</button>
					</header>
					</div>
					);
		}
});
