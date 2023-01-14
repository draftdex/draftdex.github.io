import { AuthService } from '../auth-service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  // TODO -- fix this and validate input
  @Output() onRegister = new EventEmitter();

  public authError: boolean = false;

  registerCreds: FormGroup = new FormGroup({
    team: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })

  loading: boolean = false;    // Indicate whether or not content is being loaded 

  constructor(private authService: AuthService, private router: Router) {
    this.authService.authenticated$.subscribe(next => {
      this.loading = false;
      next ? this.router.navigate(['pokemon-search']) : this.authError = true;
    });
  }

  register() {
    this.loading = true;
    this.authService.registerUser(this.registerCreds.value.team, this.registerCreds.value.username, this.registerCreds.value.password);
  }

  /**
   * Navigate to pokemon-search table with 'Guest' account
   */
  registerGuest() {
    this.router.navigate(['pokemon-search']);
  }

  cancelRegister() {
    console.log('register')
  }

}
