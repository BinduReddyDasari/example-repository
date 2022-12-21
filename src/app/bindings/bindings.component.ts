import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
 
  title = 'Angular-Project';

  
  name="name";
    updateName(){
      this.name="BinduReddy";
    }



    property="Bindu"
    disabledBox=false
    enableBox(){
      this.disabledBox=false
    }



    colour="Blue"


  constructor() { }

  ngOnInit(): void {
  }

}
