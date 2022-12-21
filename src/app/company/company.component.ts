import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetcoloursService } from '../getcolours.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  details:any;
  id:any;
  name:any;
  brightness:any;

  constructor(private service:GetcoloursService, private router:Router,private route:ActivatedRoute) { }
  navigate(){
    this.router.navigate(['/colours'],{queryParams:{id:1}})
  }
  ngOnInit(): void{
  this.id=this.route.snapshot.paramMap.get('id');
  this.name=this.route.snapshot.paramMap.get('name');
  this.brightness=this.route.snapshot.paramMap.get('brightness');
  }

}
