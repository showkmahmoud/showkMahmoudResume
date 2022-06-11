import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';
import { User } from 'src/app/data/userType';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less'],
})
export class TestimonialsComponent implements OnInit {
  user: User = user;
  index = 0;
  constructor() {}

  ngOnInit(): void {}
}
