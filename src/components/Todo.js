import React from 'react';

export default class Todo extends React.Component{  
  complete_result(complete_val){
    return complete_val ? '\u2713' : '\u2718';
  }
  
  change_result(complete_val){
    return complete_val ? false : true;
  }
  
  render(){
    const todo_value = this.props;
    
    if(todo_value != null){
        return(
        <tr>
          <td>{todo_value.name}</td>
          <td>{todo_value.text}</td>
          <td onClick={(event) => this.change_result(todo_value.complete)}>{this.complete_result(todo_value.complete)}</td>
        </tr>
      );
    }
  }
}