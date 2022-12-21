import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcoloursService {


  details=[{
    id:'2436749',
    name:'Blue',
    brightness:'56'},
    {
    id:'132456',
    name:'Green',
    brightness:'52'},
    {
      id:'7435678',
    name:'Red',
    brightness:'54'},
  {
    id:'7435678',
    name:'voilet',
    brightness:'59'},

    ]
  
  constructor() { }

  getdetails(){return this.details }
}
