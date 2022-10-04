/**
 * Author: Showk Mahmoud
 *
 * Provides the main layout and the content of the portfolio
 *
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  menuOpen: boolean = false;
  mode: string = 'light';
  settingWidth: boolean = false;
  colors: string[] = [
    '0, 80, 211,',
    '234, 44, 25,',
    '0, 180, 217,',
    '191, 85, 236,',
    '2, 154, 131,',
    '246, 36, 89,',
  ];
  themes: string[] = ['light', 'dark'];
  selectedColor: any;
  selectedTheme: any = 'light';
  sideMenuOpen: any;
  constructor(private route: Router) {}

  ngOnInit(): void {
    // initial values of the default color
    this.updateStyles('0, 180, 217,');
    const url = this.route.url.split('/')[2];
    // this.getUrl(url);
  }

  toggleMenu(menuOpen: boolean) {
    this.menuOpen = menuOpen;
  }
  // toggle the mode Setting menu
  onOpenStyleSettings() {
    this.settingWidth = !this.settingWidth;
  }

  // to update the style color of the page
  updateStyles(item: string) {
    // If empty assign default.
    document.documentElement.style.setProperty(
      '--tui-primary',
      'rgba(' + item + ' 1)' || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-primary-hover',
      'rgba(' + item + ' .8)' || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-primary-active',
      'rgba(' + item + ' 1)' || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-overlay',
      'rgba(' + item + ' .5)' || '#0060ff'
    );
    this.selectedColor = item;
    this.settingWidth = false;
  }

  // to select theme
  onChangeTheme(theme: string) {
    this.mode = theme;
    this.selectedTheme = theme;
    this.settingWidth = false;
  }

  toggleSideMenu(value: any) {
    this.sideMenuOpen = value;
  }
}
