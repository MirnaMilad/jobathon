import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
@Input() buttonName:string;
@Output() submitData = new EventEmitter<string>();
@Input() class:string = "gradient";
@Input() i:string;

onSubmit(){
this.submitData.emit();
console.log("submit button clicked")
}
}
