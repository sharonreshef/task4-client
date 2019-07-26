import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {
  constructor(
    private store: StoreService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  todoForm = this.fb.group({
    description: ['', Validators.required],
    name: ['', [Validators.required]]
  });

  ngOnInit() {
    this.store.getMembers();
  }

  submitTodo() {
    console.log(this.todoForm.value);
    this.store.addTodo(this.todoForm.value).add(() => {
      // navigate to home page when movie has been added
      this.router.navigateByUrl('');
    });
  }
}
