import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { BankComponent } from './bank/bank.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cube.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CubePipe,RouterOutlet,RouterLink, StudentComponent,FormsModule,ShopComponent, ProductComponent,BankComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstApp';
  joinDate=new Date();
}
