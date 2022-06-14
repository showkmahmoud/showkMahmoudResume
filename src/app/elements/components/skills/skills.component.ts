import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less'],
})
export class SkillsComponent implements OnInit {
  user: User = user;

  constructor() {}

  ngOnInit(): void {}
}
