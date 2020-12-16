import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/todo';

import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './../../services/todo.service';

/**********************************
 * 
 * Component to handle adding new todo items
 * 
 * Template driven form
 * 
 * Send new todos to the todos.component to be displayed there
 *
***********************************/


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  //properties
  todoTitle: string;
  todoDescription: string;


  //inject TodoSAervice
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAddTodo() {

    //create new todo
    const newTodo: Todo = {
      //generate new unique id
      id: uuidv4(),
      title: this.todoTitle,
      description: this.todoDescription,
      isComplete: false,
      date: new Date(),
    }

    //pass the new todo to the service
    this.todoService.addTodo(newTodo);

    //reset props
    this.todoTitle = '';
    this.todoDescription= '';
  }

}
