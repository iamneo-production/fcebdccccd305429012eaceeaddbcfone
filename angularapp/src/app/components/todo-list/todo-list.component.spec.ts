import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [FormsModule], // Add FormsModule to the imports

    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    const initialTodoCount = component.todos.length;
    component.newTodo = 'New Todo';
    component.addTodo();
    expect(component.todos.length).toEqual(initialTodoCount + 1);
    expect(component.todos[initialTodoCount].text).toEqual('New Todo');
  });

  it('should remove a todo', () => {
    component.todos = [{ text: 'Todo 1', editing: false }, { text: 'Todo 2', editing: false }];
    const initialTodoCount = component.todos.length;
    component.removeTodo(0);
    expect(component.todos.length).toEqual(initialTodoCount - 1);
    expect(component.todos[0].text).toEqual('Todo 2');
  });

  it('should edit a todo', () => {
    const todo = { text: 'Todo 1', editing: false };
    component.todos = [todo];
    component.editTodo(todo);
    expect(todo.editing).toEqual(true);
  });

  it('should cancel editing a todo', () => {
    const todo = { text: 'Todo 1', editing: true };
    component.todos = [todo];
    component.cancelEdit(todo);
    expect(todo.editing).toEqual(false);
  });

  it('should save editing a todo', () => {
    const todo = { text: 'Todo 1', editing: true };
    component.todos = [todo];
    component.saveEdit(todo);
    expect(todo.editing).toEqual(false);
  });

  it('should not add an empty todo', () => {
    const initialTodoCount = component.todos.length;
    component.newTodo = '';
    component.addTodo();
    expect(component.todos.length).toEqual(initialTodoCount);
  });
});
