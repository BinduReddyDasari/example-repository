import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

email =" ";
onKeyUp()
{
  console.log(this.email);

}

  constructor(private service:QuantityService) { 
    
  }

  ngOnInit(): void {

this.Vegetables=this.service.getItems();
  }
  className1='greaterthan4';
  className2='lessthan3';
  Vegetables=['Tomato','Brinjal','Potato'];


  addVegetables(Vegetable:HTMLInputElement){
    this.service.addItems(Vegetable.value);

  }
deleteVegetables(Vegetable:any){
  this.service.deleteItems(this.Vegetables);
}
}
