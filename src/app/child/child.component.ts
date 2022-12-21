import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() message! :string;
@Output() change = new EventEmitter()

isLike=false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isLike=!this.isLike;
    this.change.emit();
  }
}
