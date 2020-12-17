import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentUser, User, RegisterUser } from '../../modules/login/models/user.model';
import { UsersService } from '../../modules/login/services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService, private router: Router) {}

  public signUp(register: RegisterUser): void {
    // TODO
  }

  public loginAuth(currentUser: CurrentUser): boolean {
    let user: User;
    this.userService.getAllUsers().subscribe(users => {
      user = users.find(userInfo => userInfo.email === currentUser.email && userInfo.password === currentUser.password);
    });

    if (user) {
      localStorage.setItem('netflix-userLogged', JSON.stringify(user));
      localStorage.setItem('netflix-status', 'loggedIn');
      localStorage.setItem('netflix-id', user.id);

      return true;
    } else {
      alert('Incorrect e-mail or password');
      throw new Error('E-mail ou senha incorretos');
    }
  }

  public logOut(): boolean {
    localStorage.removeItem('netflix-userLogged');
    localStorage.removeItem('netflix-status');
    localStorage.removeItem('netflix-id');

    return true;
  }

  public getUserId(): string {
    return localStorage.getItem('netflix-id');
  }
}
