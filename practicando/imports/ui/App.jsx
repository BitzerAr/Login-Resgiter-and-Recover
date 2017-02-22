import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';




// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const text1 = ReactDOM.findDOMNode(this.refs.text1Input).value.trim();
    /*Tasks.insert({
  		text, 
		text1,
      createdAt: new Date(), // current time
    });*/
	 Meteor.loginWithPassword(text, text1,((error,result)=>{
		if(error)
		{	
			
			alert(error.error);
		}
		else
		{
			alert('good');
			result.writeHead(302,{
				'Location': 'your/404/path.html'
			});
			result.end();
		}
		}));
	/*options={};
	options.password=String(text1);
	options.username=text;
	Accounts.createUser(options,((error,result)=>{
		if(error)
			alert('tmre');
		else
			alert('good');
	}));*/
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.text1Input).value = '';
  }
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Registro</h1>
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
			<button >Enviar</button>
			</ul>
			</form>
		</header>

      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
	 tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(), 
  };
}, App);
