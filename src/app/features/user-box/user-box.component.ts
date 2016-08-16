import { Component, Input } from '@angular/core';

import { User } from './user.interface';
@Component({
  selector: 'user-box',
  templateUrl: './user-box.html',
  styleUrls: ['./user-box.scss']
})
export class UserBoxComponent {
  @Input() user: User;
}
