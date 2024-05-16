import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
showMe = false;
hideMe = false;
  movies=[
  'Zootopia',
  'Batman vs Superman',
  'Harry Potter',
  'X-men',
  'Final Destination'
]
}
