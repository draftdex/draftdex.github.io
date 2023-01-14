import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BottomBannerComponent } from 'src/app/bottom-banner/bottom-banner.component';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule, BottomBannerComponent]
})
export class LoginComponent {
  @Output() onRegister = new EventEmitter();

  public authError: boolean = false;

  loginCreds: FormGroup = new FormGroup({
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

  login() {
    this.loading = true;
    this.authService.authenticateUser(this.loginCreds.value.username, this.loginCreds.value.password);
  }

  /**
   * Navigate to pokemon-search table with 'Guest' account
   */
  loginGuest() {
    this.router.navigate(['pokemon-search']);
  }
}
