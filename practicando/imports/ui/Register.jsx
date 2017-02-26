import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
export default React.createClass({
	handleSubmit(event) {
   	event.preventDefault();
 
    	const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    	const text1 = ReactDOM.findDOMNode(this.refs.text1Input).value.trim();		
    	const text2 = ReactDOM.findDOMNode(this.refs.text2Input).value.trim();
		options={};
		options.password=String(text1);
		options.username=text;
		options.email=text2;
		Accounts.createUser(options,((error,result)=>{
			if(error)
				alert('tmre');
			else
				window.location='#';
		}));
	},
	handleRecover(event){},
	render(){
		return(
			<div className="container">
        	<header>
         	<h1>Register</h1>
      	 	<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
           	<ul>nombre  <input
             	type="text"
              	ref="textInput"
				  	required
            	/></ul>
           	<ul>password  <input
              	type="password"
              	ref="text1Input"
				  	required
            	/></ul>
           	<ul>email  <input
              	type="email"
              	ref="text2Input"
				  	required
            	/></ul>
				<ul>	
				<button onClick={this.handleSubmit.bind(this)}>Enviar</button>
				</ul>	
				</form>
			</header>
      	</div>
		)
	}
});
