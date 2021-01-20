import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentUser, User, RegisterUser } from '../../modules/login/models/user.model';
import { UsersService } from './users.service';
import { debounceTime, find, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService, private router: Router) {}

  public signUp(registerUser: RegisterUser): void {
    this.userService
      .getAllUsers()
      .pipe(
        switchMap(users => {
          const userExists = users.some(userInfo => userInfo.email === registerUser.email);

          if (!userExists) {
            return this.userService.addUser(registerUser);
          }

          return throwError('E-mail já cadastrado');
        }),
      )
      .subscribe(
        user => {
          this.loginAuth(user);
        },
        error => {
          alert(error);
        },
      );
  }

  public loginAuth(currentUser: CurrentUser): void {
    this.userService
      .getAllUsers()
      .pipe(
        switchMap(users => {
          const user = users.find(
            userInfo => userInfo.email === currentUser.email && userInfo.password === currentUser.password,
          );

          if (!!user) {
            return of(user);
          }

          return throwError('E-mail ou senha incorretos');
        }),
      )
      .subscribe(
        user => {
          localStorage.setItem('netflix-user-logged', JSON.stringify(user));
          localStorage.setItem('netflix-user-status', 'loggedIn');
          localStorage.setItem('netflix-user-id', user.id);
          this.router.navigate(['/home']);
        },
        error => {
          alert(error);
        },
      );
  }

  public logOut(): boolean {
    localStorage.removeItem('netflix-user-logged');
    localStorage.removeItem('netflix-user-status');
    localStorage.removeItem('netflix-user-id');

    return true;
  }

  public getUserId(): string {
    return localStorage.getItem('netflix-user-id');
  }

  public isAuthenticated(): boolean {
    return !!this.getUserId();
  }
}
