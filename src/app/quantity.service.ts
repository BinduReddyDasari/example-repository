import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
   
   Vegetables=['Tomato','Brinjal','Potato',]

     constructor() { }

       getItems(){

        return this.Vegetables;
       }
       addItems(Items:any){
        this.Vegetables.push(Items);
       }
       deleteItems(Items:any){
        this.Vegetables.splice(this.Vegetables.indexOf(Items), 1)
       }
      }


