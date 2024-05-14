import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= "Hello World";
  }

