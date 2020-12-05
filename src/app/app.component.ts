import { ApiServiceService } from './api-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo List Application';
  tasks$: Observable<Task[]>;

  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.tasks$ = this.apiService.getTasks();
  }

  removeTask(id: number) {
    this.apiService.removeTask(id).subscribe(res => this.tasks$ = this.apiService.getTasks());
  }
}
