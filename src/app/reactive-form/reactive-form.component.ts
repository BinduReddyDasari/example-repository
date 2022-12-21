import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
from= new FormGroup({
  username: new FormControl(' ', [ 
     Validators.required,
     Validators.minLength(5),
     UsernameValidators.cannotContainSpace
  ] ),
  
  oldPassword: new FormControl('',Validators.required),
  newPassword: new FormControl(),
  confirmedPassword: new FormControl(),
  Gender: new FormControl('')
});


get getControl(){
  return this.from.controls;
}

onSignUp(){
  console.log(this.from);
}

  constructor() { }

  ngOnInit(): void {

  
  }
}
