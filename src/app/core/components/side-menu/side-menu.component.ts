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
      'https://pdivpalwqeabsxazykkz.supabase.co/storage/v1/object/public/resume/Showk%20Mahmoud.pdf?t=2022-06-13T20%3A52%3A43.240Z'
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
