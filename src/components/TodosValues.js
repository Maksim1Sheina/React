import { EventEmitter } from 'events';

class TodosValues extends EventEmitter{
  constructor(){
    super();
    this.todos = [
      {
        id: 634984546,
        name: 'First event',
        text: 'Tru lala. Some events',
        complete: true
      },
      {
        id: 196853535,
        name: 'The same event',
        text: 'Bla la la. Enother events',
        complete: false
      },
    ];
  }
  
  getAll(){
    return this.todos;
  }
}

const todoValues = new TodosValues();

export default todoValues;