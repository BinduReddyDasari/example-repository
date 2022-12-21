import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetfamilyService {
Data= [ 
  {
    "Firstname" : "BinduReddy",
    "lastname" : "Dasari",
    "Dob" : "12/5/2005"
  },
  {

   "Firstname" : "Priya",
    "lastname" : "suravi",
    "Dob" : "2/3/2006"
  },
  {
    "Firstname" : "BinduReddy",
    "lastname" : "Dasari",
    "Dob" : "1/9/2009"
  }
]
  constructor() { }
  getdata(){return this.Data}
}
