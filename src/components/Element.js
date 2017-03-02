import React from 'react';
import '../App.css';

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
	
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  
	render(){
    /*console.log(this.props);*/

    if(this.props.title != null){
      return(
        <div>
          <h1>
            'This part from PropLayout:' {this.props.title}; 
          </h1>
          <input className="form-control" onChange={this.handleChange.bind(this)} />
        </div>
      );
    }
  
    else if(this.props.name != null){
      return(
        <div>
          <h1>
            'This part from Layout:' {this.props.name};
          </h1>
        </div>
      );
    }
  
    else {
      return(
        <div>
          <h1>
            'This part from Element:' {this.formatName(this.user)};
          </h1>
        </div>
      );
    }
	}
}
			
export default Element;