import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public subscriptions = new Subscription();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
      fullName: [null, [Validators.required]],
      passwordConfirmation: [null, [Validators.minLength(8), Validators.required]],
    });
  }

  register() {
    const { email, password, fullName } = this.signUpForm.value;
    this.authService.signUp({ email, password, fullName, profiles: [] });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
