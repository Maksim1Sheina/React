import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";

class TodosValues extends EventEmitter{
  constructor(){
    super();
    this.todos = [
      {
        id: 1488787789153,
        name: 'First event',
        text: 'Tru lala. Some events',
        complete: true
      },
      
      {
        id: 1488787789155,
        name: 'The same event',
        text: 'Bla la la. Enother events',
        complete: false
      },
      
      {
        id: 1488787789159,
        name: 'First event',
        text: 'Tru lala. Some events',
        complete: true
      },
      
      {
        id: 1488787789161,
        name: 'The same event',
        text: 'Bla la la. Enother events',
        complete: false
      },
    ];
  }
  
  create_Todo(name, text){
    const id = Date.now();
    
    this.todos.unshift({
      id,
      name,
      text,
      complete: false
    }); 
  }
  
  edit_Todo(id, name, text){
    this.todos.splice(this.todos.findIndex(function(e_todo){
      return e_todo.id === id;
    }),1,{
      id,
      name,
      text
    });
  }
  
  delete_Todo(id){
    this.todos.splice(this.todos.findIndex(function(e_todo){
      return e_todo.id === id;
    }),1);
  }
  
  change_complete(id){
    var i = 0;
    
    for(i = 0; i < this.todos.length; i++){
      
      if(this.todos[i].id === id){
        
        if(this.todos[i].complete === false){
          this.todos[i].complete = true;
          break;
        }
        
        else{
          this.todos[i].complete = false;
          break;
        }
        
      }
      
    }
  }
  
  getAll(){
    return this.todos;
  }
  
  handleActions(action){
    switch(action.type){
      case "CREATE_TODO":{
        this.create_Todo(action.name, action.text);
        break;
      }
        
      case "EDIT_TODO":{
        this.edit_Todo(action.id, action.name, action.text);
        break;
      }
      
      case "DELETE_TODO":{
        this.edit_Todo(action.id);
        break;
      }  
        
      default:
        break;
    }
  }
}

const todoValues = new TodosValues();
dispatcher.register(todoValues.handleActions.bind(todoValues));

export default todoValues;