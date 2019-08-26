import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // usersUrl:string = 'http://127.0.0.1:8081/api/users';

  users = [];

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
   // return this.http.get<User[]>(this.usersUrl);
  // }

  getUsers() {
    return this.users;
  }

  getUsersJson() {
    return this.http.get('/assets/users.json');
  }

}
