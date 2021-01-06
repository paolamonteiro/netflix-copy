import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentUser, User, RegisterUser } from '../../modules/login/models/user.model';
import { UsersService } from './users.service';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService, private router: Router) {}

  public signUp(register: RegisterUser): void {
    this.userService.addUser(register).subscribe(
      user => {
        this.loginAuth(user);
      },
      error => {
        console.error(error);
        alert('Erro ao cadastrar');
      },
    );
  }

  public loginAuth(currentUser: CurrentUser): void {
    this.userService.getAllUsers().subscribe(
      users => {
        console.log('users: ', users);
        const user = users.find(
          userInfo => userInfo.email === currentUser.email && userInfo.password === currentUser.password,
        );
        
        if (!!user) {
          localStorage.setItem('netflix-user-logged', JSON.stringify(user));
          localStorage.setItem('netflix-user-status', 'loggedIn');
          localStorage.setItem('netflix-user-id', user.id);
          this.router.navigate(['/home'])
        } else {
          throw new Error('E-mail ou senha incorretos');
        }
      },
      error => {
        console.error(error);
        alert('E-mail ou senha incorretos');
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
}
