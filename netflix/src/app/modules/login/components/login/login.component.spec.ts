import { fireEvent, render, screen, waitFor } from '@testing-library/angular';
import { provideMock, createMock } from '@testing-library/angular/jest-utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import userEvent from '@testing-library/user-event';

import { AuthService } from '../../../../shared/services/auth.service';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';

describe('Testing library', () => {
  describe('Login Testing library', () => {
    test('should create', async () => {
      await render(LoginComponent, {
        imports: [FormsModule, ReactiveFormsModule],
        componentProviders: [provideMock(AuthService)],
      });

      expect(screen.getByRole('textbox', { name: 'Email ou número de telefone' })).toBeTruthy();
      expect(screen.getByLabelText('Senha', { selector: 'input' })).toBeTruthy();
      expect(screen.getByRole('button', { name: 'Entrar' })).toBeTruthy();
      expect(screen.getByText('Assine agora.'));
    });

    test('it should call login function', async () => {
      const authService = createMock(AuthService);
      authService.loginAuth = jest.fn();

      await render(LoginComponent, {
        imports: [FormsModule, ReactiveFormsModule],
        componentProviders: [
          {
            provide: AuthService,
            useValue: authService,
          },
        ],
      });

      const loginButton = screen.getByRole('button', { name: 'Entrar' });
      const emailInput = screen.getByLabelText('Email ou número de telefone', { selector: 'input' });
      const passwordInput = screen.getByLabelText('Senha', { selector: 'input' });

      userEvent.type(emailInput, 'test@test.com');
      userEvent.type(passwordInput, '12345678');
      userEvent.click(loginButton);

      expect(authService.loginAuth).toHaveBeenCalled();
    });
  });
});
