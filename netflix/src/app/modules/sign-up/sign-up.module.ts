import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from "./components/sign-up/sign-up.component";

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
