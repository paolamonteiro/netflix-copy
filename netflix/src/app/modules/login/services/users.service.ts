import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }
}
