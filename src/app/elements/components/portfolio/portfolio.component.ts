import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import {
  PortfolioItem,
  PortfolioItemContent,
  User,
} from 'src/app/data/userType';
export enum FILTER_ACTIONS {
  all = 'All',
  html = 'HTML5 & CSS3',
  bootstrap = 'Bootstrap & SASS',
  js = 'JavaScript',
  react = 'React Js',
  angular = 'Angular',
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
})
export class PortfolioComponent implements OnInit {
  user: User = user;
  filterItems: string[] = [
    FILTER_ACTIONS.all,
    FILTER_ACTIONS.html,
    FILTER_ACTIONS.bootstrap,
    FILTER_ACTIONS.js,
    FILTER_ACTIONS.react,
    FILTER_ACTIONS.angular,
  ];
  filteredItems!: PortfolioItem[];
  filterItem!: string;
  constructor() {}

  ngOnInit(): void {
    this.filter(FILTER_ACTIONS.all);
  }
  open = false;
  itemIndex = 0;
  index = 0;
  onClick(i: number): void {
    this.index = 0;
    this.itemIndex = i;
    this.open = true;
  }
  filter(action: string) {
    this.filterItem = action;
    if (action === FILTER_ACTIONS.all) {
      this.filteredItems = this.user.portfolio.items;
    } else if (action === FILTER_ACTIONS.html) {
      this.filteredItems = this.user.portfolio.items.filter(
        (item) => item.type === FILTER_ACTIONS.html
      );
    } else if (action === FILTER_ACTIONS.bootstrap) {
      this.filteredItems = this.user.portfolio.items.filter(
        (item) => item.type === FILTER_ACTIONS.bootstrap
      );
    } else if (action === FILTER_ACTIONS.js) {
      this.filteredItems = this.user.portfolio.items.filter(
        (item) => item.type === FILTER_ACTIONS.js
      );
    } else if (action === FILTER_ACTIONS.react) {
      this.filteredItems = this.user.portfolio.items.filter(
        (item) => item.type === FILTER_ACTIONS.react
      );
    } else if (action === FILTER_ACTIONS.angular) {
      this.filteredItems = this.user.portfolio.items.filter(
        (item) => item.type === FILTER_ACTIONS.angular
      );
    }
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
