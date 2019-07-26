import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'models/todo.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodosFromServer(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`http://localhost:3000/todos/`);
  }

  addTodoToServer(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`http://localhost:3000/todos/`, todo);
  }

  deleteTodoFromServer(id: string): Observable<Todo> {
    console.log('delete from server');
    return this.httpClient.delete<Todo>(`http://localhost:3000/todos/${id}`);
  }
}
