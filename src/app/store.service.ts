import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'models/todo.models';
import { Member } from 'models/member.model';
import { TodoService } from './todo.service';
import { MembersService } from './members.service';

export interface IState {
  todos: Todo[];
  members: Member[];
  selectedMember: string;
}

const initialState: IState = {
  todos: [],
  members: [],
  selectedMember: null
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly _store = new BehaviorSubject<IState>(initialState);
  constructor(
    private todoService: TodoService,
    private membersService: MembersService
  ) {}

  get currentState(): IState {
    return this._store.getValue();
  }

  getMembers() {
    this.membersService.getMembersFromServer().subscribe(members => {
      this.setState({
        members
      });
    });
  }

  get members(): Member[] {
    return this.currentState.members;
  }
  setState(newState: Partial<IState>) {
    this._store.next({
      ...this.currentState,
      ...newState
    });
  }

  getTodos() {
    this.todoService.getTodosFromServer().subscribe(todos => {
      this.setState({
        todos
      });
    });
  }

  get todos(): Todo[] {
    return this.currentState.todos;
  }

  addTodo(todo: Todo) {
    return this.todoService.addTodoToServer(todo).subscribe(todoFromServer => {
      this.setState({
        todos: this.todos.concat(todoFromServer)
      });
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodoFromServer(id).subscribe(
      todo => console.log('apartment'),
      error => console.log('Error: ', error),
      () => {
        this.getTodos();
      }
    );
  }
}
