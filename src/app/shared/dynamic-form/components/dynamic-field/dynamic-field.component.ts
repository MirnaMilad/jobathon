import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import {
  Component,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { Field } from 'src/app/shared/models/input.model';

@Component({
  selector: 'app-dynamic-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicInputComponent
  ],
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent {
  @Input() formName:FormGroup;
  @Input() field: Field;

  ngOnInit(){
    console.log(this.field)
  }
}
