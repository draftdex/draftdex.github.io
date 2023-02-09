import { AuthService } from '../../shared/services/auth-service';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  @Input() availableTeams: string[] = [];
  @Output() onCloseRegisterForm = new EventEmitter();

  public invalidForm: boolean = false;
  public passwordMismatch: boolean = false;
  public registrationError: boolean = false;
  public loading: boolean = false;   
  public registrationForm: FormGroup = new FormGroup({
    team: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirmation: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.validateForm()) return;
    this.loading = true;

    this.authService.registerUser(this.registrationForm.value).subscribe({
      next: () =>  {
        this.loading = false;
        this.onCloseRegisterForm.emit('success');
      },
      error: (error) => {
        this.loading = false;
        this.registrationError = true;
        console.error('Error registering user', error);
      }
    });
  }

  /**
   * Navigate to pokemon-search table with 'Guest' account
   */
  registerGuest() {
    this.router.navigate(['pokemon-search']);
  }

  cancelRegister() {
    this.onCloseRegisterForm.emit('cancel');
  }

  resetErrors() {
    this.invalidForm = false;
    this.passwordMismatch = false;
    this.registrationError = false;
  }

  /**
   * Validate registration form
   * @returns validity of registration form
   */
  private validateForm(): boolean {
    if (!this.registrationForm.valid) {
      this.invalidForm = true;
      return false;
    }

    if (this.registrationForm.get('password')?.value !== this.registrationForm.get('passwordConfirmation')?.value) {
      this.passwordMismatch = true;
      return false;
    }

    return true;
  }

}
