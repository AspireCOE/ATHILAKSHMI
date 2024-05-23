import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
users:any;
constructor(SE:UserService){
  this.users=SE.getData();
}
ngOnInit(): void{}
}
