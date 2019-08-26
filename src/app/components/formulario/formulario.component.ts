import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  users;

  constructor(private userService: UserService) {
      this.users = this.userService.getUsersJson();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
  }

}
