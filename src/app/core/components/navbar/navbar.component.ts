import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarItems, user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  @Output() sideMenuOpened: EventEmitter<any> = new EventEmitter();

  user: User = user;
  items = navbarItems;
  menuOpen: boolean = true;
  sideMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onClick(item: any) {
    this.menuOpen = true;
    this.buttonClicked.emit(item);
  }
  onSideMenu(value: boolean) {
    this.sideMenuOpen = value;
    this.sideMenuOpened.emit(value);
  }
}
