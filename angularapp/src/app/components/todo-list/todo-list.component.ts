import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  selectedTodo: Todo | null = null; // For editing

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, editing: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  editTodo(todo: Todo) {
    this.selectedTodo = todo;
    todo.editing = true;
  }

  cancelEdit(todo: Todo) {
    this.selectedTodo = null;
    todo.editing = false;
  }

  saveEdit(todo: Todo) {
    todo.editing = false;
    this.selectedTodo = null;
  }
}

interface Todo {
  text: string;
  editing: boolean;
}
