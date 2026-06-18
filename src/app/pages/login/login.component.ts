import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div style="min-height: calc(100vh - 70px); background: #FFF6F6; display: flex; align-items: center; justify-content: center; padding: 60px 24px; font-family: 'Poppins', 'Inter', sans-serif;">
      <div style="background: #FFFFFF; border: 1px solid #EBEBEB; border-radius: 12px; padding: 48px; width: 100%; max-width: 480px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);">
        
        <!-- Welcome Heading -->
        <h2 style="font-size: 24px; font-weight: 700; color: #111111; margin: 0 0 28px 0; font-family: 'Poppins', 'Inter', sans-serif;">
          Hi, Welcome back!
        </h2>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          
          <!-- Username / Email Field -->
          <div style="margin-bottom: 20px;">
            <input 
              type="text" 
              formControlName="username" 
              placeholder="Username or Email Address" 
              class="login-input" 
              [class.is-error]="isTouchedAndInvalid('username')"
            />
            @if (isTouchedAndInvalid('username')) {
              <span class="error-text">Please enter your username or email</span>
            }
          </div>

          <!-- Password Field -->
          <div style="margin-bottom: 24px;">
            <input 
              type="password" 
              formControlName="password" 
              placeholder="Password" 
              class="login-input" 
              [class.is-error]="isTouchedAndInvalid('password')"
            />
            @if (isTouchedAndInvalid('password')) {
              <span class="error-text">Password is required</span>
            }
          </div>

          <!-- Keep me signed in & Forgot Password Row -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; flex-wrap: wrap; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px; color: #666666; font-weight: 500;">
              <input type="checkbox" formControlName="keepMeSignedIn" style="width: 16px; height: 16px; cursor: pointer; accent-color: #2D3192;" />
              Keep me signed in
            </label>
            
            <button type="button" class="green-pill-btn">
              Forgot Password?
            </button>
          </div>

          <!-- Sign In Button -->
          <button type="submit" class="signin-btn">
            Sign In
          </button>

        </form>

        <!-- Don't have an account Row -->
        <div style="margin-top: 28px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px; color: #666666;">
          <span>Don't have an account?</span>
          <button type="button" routerLink="/skillstorm/open-challenges" class="green-pill-btn">
            Register Now
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .login-input {
      width: 100%;
      background-color: #ffffff;
      border: 1px solid #DDDDDD;
      border-radius: 8px;
      padding: 14px 16px;
      font-size: 15px;
      color: #333333;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }
    .login-input:focus {
      border-color: #999999;
      box-shadow: 0 0 0 3px rgba(0,0,0,0.04);
    }
    .login-input.is-error {
      border-color: #FF0000;
    }
    .login-input::placeholder {
      color: #888888;
    }
    .error-text {
      font-size: 12px;
      color: #FF0000;
      margin-top: 4px;
      display: block;
    }
    .green-pill-btn {
      background-color: #10B981;
      color: #ffffff;
      border: none;
      border-radius: 20px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      font-family: 'Poppins', 'Inter', sans-serif;
      transition: background-color 0.2s;
    }
    .green-pill-btn:hover {
      background-color: #059669;
    }
    .signin-btn {
      width: 100%;
      background-color: #2D3192;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 14px 24px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.2s, background-color 0.2s;
      letter-spacing: 0.01em;
      font-family: 'Poppins', 'Inter', sans-serif;
    }
    .signin-btn:hover {
      background-color: #1E2270;
    }
  `]
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    keepMeSignedIn: [false]
  });

  isTouchedAndInvalid(ctrl: string): boolean {
    const c = this.loginForm.get(ctrl);
    return !!(c && c.touched && c.invalid);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login credentials:', this.loginForm.value);
      this.router.navigate(['/skillstorm/school-dashboard']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
