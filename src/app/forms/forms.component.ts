import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
modes=[
  'phone',
  'Email'
];
  constructor() { }
logCourse(course:NgModel){
  return console.log(course);

}
  submit(course:any){

  }

  ngOnInit(): void {
  }

}
