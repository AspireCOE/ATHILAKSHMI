import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attrdir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attrdir.component.html',
  styleUrl: './attrdir.component.css'
})
export class AttrdirComponent {
applyRed=false;
}
