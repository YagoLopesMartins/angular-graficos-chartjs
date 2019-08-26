import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-projeto-graficos';
  users: User[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    // this.userService.getUsers().subscribe();
  }
}
