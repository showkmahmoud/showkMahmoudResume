import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
})
export class PortfolioComponent implements OnInit {
  user: User = user;
  constructor() {}

  ngOnInit(): void {}
  open = false;
  itemIndex = 0;
  index = 0;
  onClick(i: number): void {
    this.index = 0;
    this.itemIndex = i;
    this.open = true;
  }
  get background(): any {
    return `url(${
      this.user.portfolio.items[this.itemIndex].content[this.index].img
    })`;
  }
  navigate(delta: number, length: number): void {
    this.index = (this.index + delta) % length;
  }
}
