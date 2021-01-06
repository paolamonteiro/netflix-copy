import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser, User } from '../../modules/login/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  public addUser(registerUser: RegisterUser): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', 
      registerUser
    );
  }
}
