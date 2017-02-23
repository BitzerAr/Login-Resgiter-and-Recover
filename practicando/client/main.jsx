import { Accounts } from 'meteor/accounts-base';

Accounts.onEmailVerificationLink(((token,done)=>{
	verificado=function(error){
		if(error)
			alert('tmre fallo verificacion');
		else
			alert('good verificacion');
	};
	Accounts.verifyEmail(token,verificado);
}));
Accounts.onResetPasswordLink( ( ( token,done) => {
	verificado=function(error){
		if(error)
			alert('tmre fallo verificacion');
		else
			alert('good verificacion');
	};
	Accounts.resetPassword(token, 'jaja', verificado);
} ) );
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
//import AppLogged from '../imports/ui/AppLogged.jsx';
 
Meteor.startup(() => {
	//if(!Meteor.userId())
	  render(<App />, document.getElementById('render-target'));
	//else
	  //render(<App />, document.getElementById('render-target'));
	
});
