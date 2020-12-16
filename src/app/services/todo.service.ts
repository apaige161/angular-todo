import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '1',
        title: 'First todo',
        description: 'description',
        isComplete: false,
        date: new Date(),
      },
      {
        id: '2',
        title: 'Second todo',
        description: 'description',
        isComplete: false,
        date: new Date(),
      },
      {
        id: '3',
        title: 'Third todo',
        description: 'description',
        isComplete: false,
        date: new Date(),
      },
    ]
   }


  /************************************
   * 
   all of the CRUD operations live in this service

  ************************************/

  //get all todos
  //observable of todo component
  getTodos() {
    //of() makes this an observable
    return of(this.todos)
  }

  //add a todo
  addTodo(todo: Todo) {
    //add a todo to the array
    this.todos.push(todo);
  }

  //update
  changeStatus(todo: Todo) {
    //goes through each item in the array and returns a new array with the results
    //.map() takes a callback function to do that
    this.todos.map(singleTodo => {
      if(singleTodo.id == todo.id) {
        //toggle complete
        todo.isComplete = !todo.isComplete;
      }
    })
  }

  deleteTodo(todo:Todo) {
    //delete by index number
    //find the index
    const indexOfTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    )

    //remove the found index and remove 1 item from array
    this.todos.splice(indexOfTodo, 1)
  }


}
