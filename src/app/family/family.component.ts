import { Component, OnInit } from '@angular/core';
import { GetfamilyService } from '../getfamily.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
data:any
  constructor(private service:GetfamilyService) { }

  ngOnInit(): void {
    this.data= this.service.getdata();

  }

}
