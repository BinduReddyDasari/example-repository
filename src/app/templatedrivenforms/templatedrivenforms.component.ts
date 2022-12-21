import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.css']
})
export class TemplatedrivenformsComponent implements OnInit {


onSubmit(form: NgForm){
  console.log(form);
}
  constructor() { }

  ngOnInit(): void {
  }

}
