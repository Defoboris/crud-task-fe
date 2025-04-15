import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiCnfigService: ApiConfigService) { }

  getAllTaskLists() {
    return this.apiCnfigService.get('taskLists');
  }

  createTaskList(title: string) {
    let data = { 'title': title };
    return this.apiCnfigService.post('taskLists', data);
  }

  getAllTaskForATaskList(taskListId: string){
    return this.apiCnfigService.get(`taskLists/${taskListId}`);
  }

  createTaskInTaskList(taskListId: string, title: string){
    this.apiCnfigService.post('task', { taskListId, title });
  }
}
