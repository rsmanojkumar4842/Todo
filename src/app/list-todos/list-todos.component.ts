import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done : boolean,
    public targetDate : Date,
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Dance',false,new Date()),
    new Todo(2, 'Playing Cricket at Clubs',false,new Date()),
    new Todo(3, 'Went to Tour',false,new Date())
    // {id : 1, description : 'Learn to Dance'},
    // {id : 2, description : 'Playing Cricket at Clubs'},
    // {id : 3, description : 'Went to Tour'}
  ]
  // todo = {
  //       id : 1,
  //       description:'Learn to dance'
  // }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
