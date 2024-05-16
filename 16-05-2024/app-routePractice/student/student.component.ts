import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
studentName:String="Athila";
studentMark:number=488;
joinDate:Date=new Date();
message:String="This is event binding"
fontColor:String="blue";
displayMessage() {
  console.log('Button clicked!');
}
}
