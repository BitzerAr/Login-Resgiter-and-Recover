import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
export default React.createClass(
		{
		handleSubmit(event) {

		event.preventDefault();
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
		const text1 = ReactDOM.findDOMNode(this.refs.text1Input).value.trim();
		Meteor.loginWithPassword(text, text1,((error,result)=>{
					if(error){	
					alert(error.error);
					}
					else{
						window.location='#/user';
					}
					})) ;
		},
		goToRegister(event) {
			event.preventDefault();
			window.location='#/register';
		},
		goToRecoverPassword(event) {
			event.preventDefault();
			window.location='#/recoverpassword';
		},
		render(){
			return(
					<div className="container">
					<header>
					<h1>Login</h1>
					<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
					<ul>nombre  <input
					type="text"
					ref="textInput"
					placeholder="Type to add new tasks"
					required
					/></ul>
					<ul>apellido  <input
					type="password"
					ref="text1Input"
					placeholder="Type to add new tasks"
					required
					/></ul> 
					<ul>	
					<input type="submit" value="Login"/>
					</ul>
					</form>
					<button onClick={this.goToRegister.bind(this)}>Registrarse</button>
					<button onClick={this.goToRecoverPassword.bind(this)}>Olvidaste La cotraseña?</button>
					</header>
					</div>
					);
		}
});
