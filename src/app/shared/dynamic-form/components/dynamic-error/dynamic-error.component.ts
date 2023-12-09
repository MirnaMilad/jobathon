import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss']
})
export class DynamicErrorComponent{
  @Input() formName: FormGroup;
  @Input() fieldName: string;
  @Input() fieldLabel: string;
}
