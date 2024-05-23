import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(){
    return [
      {name:'Rakshith',email:'rakshith65@gmail.com',phone:'97689054323'},
      {name:'Prabha',email:'prabhakaran@gmail.com',phone:'97459005038'},
      {name:'Vinoth',email:'vinothrk97@gmail.com',phone:'78096435678'}
    ];
  }
}
