import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NewToDoComponent } from './new-to-do/new-to-do.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/new', component: NewToDoComponent },
  { path: '**', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
