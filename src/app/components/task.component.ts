import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  template: `
  <div class="list-item {{ task?.state }}">
     <label class="checkbox">
       <input
         type="checkbox"
         [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
         disabled="true"
         name="checked"
       />
       <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
     </label>
     <div class="title">
       <input
         type="text"
         [value]="task?.title"
         readonly="true"
         placeholder="Input title"
       />
     </div>
     <div class="actions">
       <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
         <span class="icon-star"></span>
       </a>
     </div>
   </div>
  `,
  styleUrls: []
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() onPinTask = new EventEmitter<Event>();
  @Output() onArchiveTask = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
