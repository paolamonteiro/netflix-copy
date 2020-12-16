import { UsersService } from '../../modules/login/services/users.service';
import { Injectable } from '@angular/core';
import { CurrentUser, User, RegisterUser } from "../../modules/login/models/user.model"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UsersService, private router: Router) { }

  public signUp(register: RegisterUser) {
    // TODO
  }

  public loginAuth(currentUser: CurrentUser) {
    let user: User;
    this.userService.getAllUsers().subscribe(users => {
      user = users.find(user => user.email === currentUser.email && user.password === currentUser.password);
    });

    if (user) {
      localStorage.setItem('userLogged', JSON.stringify(user));
      localStorage.setItem('status', 'loggedIn');
      localStorage.setItem('id', user.id);

      this.router.navigate(['/home']);
    } else {
      alert("Incorrect e-mail or password");
      throw new Error("E-mail ou senha incorretos");
    }
  }

  public logOut() {
    localStorage.removeItem('userLogged');
    localStorage.removeItem('status');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  public isUserLoggedIn() {
    return localStorage.getItem('status') === 'loggedIn';
  }
}
