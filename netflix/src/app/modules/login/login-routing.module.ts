import { LoginPageGuard } from './../../shared/guard/login-page.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: LoginComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
