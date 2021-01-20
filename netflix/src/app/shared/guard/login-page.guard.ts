import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginPageGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route);
    console.log(route.data);
    console.log(route.url);
    console.log(state);
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['home']);

      return false;
    }

    return true;
  }
}
