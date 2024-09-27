/**
 * Author: Showk Mahmoud
 *
 * Provides the portfolio-page that contains more then one example
 *
 */
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import { PortfolioItem, User } from 'src/app/data/userType';
// filter label items
export enum FILTER_ACTIONS {
  all = 'All',
  html = 'HTML5 & CSS3',
  bootstrap = 'Bootstrap & SASS',
  js = 'JavaScript',
  react = 'React Js',
  angular = 'Angular',
  Figma = 'Figma Designs',
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
})
export class PortfolioComponent implements OnInit {
  user: User = user;
  filterItems: FILTER_ACTIONS[] = [
    FILTER_ACTIONS.all,
    FILTER_ACTIONS.html,
    FILTER_ACTIONS.bootstrap,
    FILTER_ACTIONS.react,
    FILTER_ACTIONS.angular,
    FILTER_ACTIONS.Figma,
  ];
  filteredItems!: PortfolioItem[];
  filterItem!: string;
  open: boolean = false;
  itemIndex: number = 0;
  index: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.filter(FILTER_ACTIONS.all);
  }

  //  to open the Slider and display the images
  onViewSlider(i: number): void {
    this.index = 0;
    this.itemIndex = i;
    this.open = true;
  }

  // to filter the arry of cards depending on the technology that used in

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
    } else if (action === FILTER_ACTIONS.Figma) {
      this.filteredItems = this.user.portfolio.items.filter(
        (item) => item.type === FILTER_ACTIONS.Figma
      );
    }
  }

  // used to display the data as background image in the slider modal
  get background(): any {
    return `url(${this.filteredItems[this.itemIndex].content[this.index].img})`;
  }

  // using to navigate between the images of the slider when you display it
  navigate(delta: number, length: number): void {
    this.index = (this.index + delta) % length;
  }

  // to display the real modal from the card images that you watch
  onRoute(link: string) {
    window.open(link, '_blank');
  }
}
