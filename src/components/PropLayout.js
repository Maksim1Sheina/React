import React from 'react';
import '../App.css';
import Element from './Element'

export default class PropLayout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Welcome at the party'
    }
  }
  
  changeTitle(titleee){
    this.setState({title: titleee});
  }
  
  render() {
    return (
			<div>
				<Element changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
			</div>
    );
  }
}