import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetvegetablesService {

harvesting= [
  {qty: '500', name: 'drumsticks', rs: '1000'},
  {qty: '150', name: 'pumpkins', rs: '1500'},
  {qty: '200', name: 'carrots', rs: '1200'}
];

  constructor() { 
}
GetHarvesting(){

  return this.GetHarvesting
}
}