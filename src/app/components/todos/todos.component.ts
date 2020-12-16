import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

import { Todo } from './../../model/todo'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


/*****************************************************
 * 
 * Component is responsible for displaying all todo items
 * 
 * todo.service holds the logic to do all of the heavy lifting
 * 
 ********************************************************/


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //set for use
  faTrashAlt = faTrashAlt;

  todos: Todo[];

  //only allow this component to have access to the service with the private access modifier
  constructor( private todoService: TodoService) {}


  ngOnInit(): void {
    //do this on initializing component
    //pull in observable and subscribe to it
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    //use the service to toggle status
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    //use the service to delete todo object
    this.todoService.deleteTodo(todo);
  }

}
