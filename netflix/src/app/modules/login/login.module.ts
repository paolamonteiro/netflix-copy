import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  declarations: [LoginComponent, ProfilesComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule],
})
export class LoginModule { }
