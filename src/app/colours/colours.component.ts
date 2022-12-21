import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetcoloursService } from '../getcolours.service';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})
export class ColoursComponent implements OnInit {

  details:any;

  constructor(private service:GetcoloursService,private router:Router){ }

  navigate(id:any,name:any,brightness:any){
    this.router.navigate(['/colours',id,name,brightness],{queryParams:{id:1}});
  }

  ngOnInit(): void {
    this.details=this.service.getdetails();
  }

}
