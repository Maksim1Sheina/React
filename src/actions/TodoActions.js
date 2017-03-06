import dispatcher from "../dispatcher";

export function createTodo(name, text){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    name,
    text,
  })
}

export function deleteTodo(id){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  })
}

export function editTodo(id, name, text){
  dispatcher.dispatch({
    type: "EDIT_TODO",
    id,
    name,
    text,
  })
}