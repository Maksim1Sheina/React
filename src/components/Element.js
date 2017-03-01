import React from 'react';

class Element extends React.Component{
	constructor() {
		super();
		this.user = {
	  	firstName: 'Maksim',
	  	lastName: 'Sheina'
		};
		
		this.formatName = function(user) {
	  	return user.firstName + ' ' + user.lastName;
		}
	}	
	
	render(){
		return(
			<h1>
				Hello, {this.formatName(this.user)}!
		  	</h1>
		);
	}
}
			
export default Element;