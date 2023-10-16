import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less'],
})
export class SideMenuComponent implements OnInit {
  user: User = user;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onDownload() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      'https://drive.google.com/file/d/1Tg7sYd42Bcoh8t0jcb2BVxL8ro1OJAma/view?usp=sharing'
    );
    link.setAttribute('download', `CV.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  onClose() {
    this.buttonClicked.emit(true);
  }
}
