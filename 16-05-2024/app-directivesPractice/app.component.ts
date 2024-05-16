import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';
import { MovieComponent } from './movie/movie.component';
import { CommonModule } from '@angular/common';
import { AttrdirComponent } from './attrdir/attrdir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarComponent,MovieComponent,CommonModule,FormsModule,AttrdirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= "Hello World";
  }

