import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less'],
})
export class ResumeComponent implements OnInit {
  user: User = user;
  constructor() {}

  ngOnInit(): void {}
}
