import { Component } from '@angular/core';
import {product} from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryInput:String="Stationary"

products:product[]=[{productId:101,productName:"Laptop",cost:40000,category:"Electronics"},
{productId:101,productName:"Laptop",cost:40000,category:"Electronics"},
{productId:102,productName:"Pendrive",cost:400,category:"Electronics"},
{productId:103,productName:"Pensi",cost:20,category:"Beverages"},
{productId:104,productName:"7UP",cost:40,category:"Beverages"},
{productId:105,productName:"charger",cost:200,category:"Electronics"},
{productId:106,productName:"Mobile",cost:30000,category:"Electronics"},
{productId:107,productName:"Pen",cost:20,category:"Stationary"},
]
}
