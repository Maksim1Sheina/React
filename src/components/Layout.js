import React from 'react';
import '../App.css';
import Element from './Element'

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'Maksim'
		};
	}
	
  render() {
    setTimeout(() => {
      this.setState({name: 'Sheina'});
    }, 2000)
    
    return (
			<div>
				<Element name={this.state.name}/>
			</div>
    );
  }
}