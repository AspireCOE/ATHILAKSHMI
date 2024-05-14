import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled: boolean = false;
  carId: string = 'car-1234'; 
  isFavorite: boolean = true; 
  isNotFavorite:boolean=false;
  carColor: string = 'red'; 
  handleClick(){
    console.log('Button clicked!');
  }
}
