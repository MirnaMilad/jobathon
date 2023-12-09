import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-dropdown',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './btn-dropdown.component.html',
  styleUrls: ['./btn-dropdown.component.scss'],
})
export class BtnDropdownComponent implements OnInit {
  //Inputs
  @Input() btnText: string;
  @Input() menuList: string[];
  @Input() buttonWidth: string;

  currentLang: string;

  //Event Emitters
  @Output() onBtnClick = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
  }

  onBtnClickEmitt(menuItem: any) {
    this.onBtnClick.emit(menuItem);
  }
}
