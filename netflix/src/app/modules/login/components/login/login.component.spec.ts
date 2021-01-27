import { render, screen } from '@testing-library/angular';
import { provideMock } from '@testing-library/angular/jest-utils';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthService } from '../../../../shared/services/auth.service';
import { LoginComponent } from './login.component';

describe('Login Testing library', () => {
  test('should create', async () => {
    await render(LoginComponent, {
      imports: [FormsModule, ReactiveFormsModule],
      componentProviders: [provideMock(AuthService)],
    });

    expect(screen.getByText('Assine agora.'));
  });
});
