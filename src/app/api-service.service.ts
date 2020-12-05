import { Task } from './model/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  public removeTask(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/tasks/${id}`);
  }
}
