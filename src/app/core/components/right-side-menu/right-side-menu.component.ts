import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarItems, user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-right-side-menu',
  templateUrl: './right-side-menu.component.html',
  styleUrls: ['./right-side-menu.component.less'],
})
export class RightSideMenuComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();
  items = navbarItems;
  user: User = user;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.buttonClicked.emit(true);
  }
  onClose() {
    this.buttonClicked.emit(true);
  }
}
