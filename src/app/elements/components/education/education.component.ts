import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less'],
})
export class EducationComponent implements OnInit {
  user: User = user;
  constructor() {}

  ngOnInit(): void {}
}
