import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
msg:any;

  constructor() { }

  ngOnInit(): void {
  }
  pipe(Input:HTMLInputElement){
    this.msg=Input.value
  }

}
