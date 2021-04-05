import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
  
  
export class TodoComponent implements OnInit {
  @Input() todos: Todo[] = [{
    task: 'Complete Angular Lab 1 Part 1', completed: true
  },
  {
    task: 'Finish website mockup', completed: false
  },
  {
    task: 'Study for Typescript Exam', completed: true
  },
  {
    task: 'Attend tutoring session at 5pm', completed: true
  },
  {
    task: 'Prepare interview questions', completed: false
  },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
