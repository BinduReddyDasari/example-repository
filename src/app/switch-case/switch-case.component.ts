import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
pizza:any;
setPersons(input:HTMLInputElement){
  this.pizza=input.value;
}
}
