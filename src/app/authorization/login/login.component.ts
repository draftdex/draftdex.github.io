import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BottomBannerComponent } from 'src/app/bottom-banner/bottom-banner.component';
import { AuthService } from '../../shared/services/auth-service';
import { SupabaseService } from 'src/app/shared/services/supabase-service';
import { Router } from '@angular/router';
import { UserStyle } from 'src/app/shared/models/UserStyles.model';

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
  public loading: boolean = false;    
  public loginCreds: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService, 
              private router: Router,
              private supabaserService: SupabaseService) {
    this.setLoginListener();
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

  private setLoginListener(): void {
    this.authService.authenticated$.subscribe({
      next: (success) => {
        this.loading = false;
        if (success) {
          this.supabaserService.getStylesForUser(this.authService.userSession.id).subscribe({
            next: (style: UserStyle) => {
              this.setUserStyles(style);
              this.router.navigate(['pokemon-search']);
            },
            error: (err) => console.error(err)
          });
        } else {
          this.authError = true;
        } 
      }, error: (error) => console.error('Error authenticating user', error)
    });
  }

  private setUserStyles(style: UserStyle): void {
    document.documentElement.style.setProperty('--main-background', style.mainBackground);
    document.documentElement.style.setProperty('--header-background', style.headerBackground);
    document.documentElement.style.setProperty('--header-text', style.headerText);
    document.documentElement.style.setProperty('--main-text-dark', style.mainTextDark);
    document.documentElement.style.setProperty('--main-text-light', style.mainTextLight);
    document.documentElement.style.setProperty('--dark-background', style.darkBackground);
    document.documentElement.style.setProperty('--light-background', style.lightBackground);
    document.documentElement.style.setProperty('--button-color1', style.buttonColor1);
    document.documentElement.style.setProperty('--button-color2', style.buttonColor2);
    document.documentElement.style.setProperty('--button-text', style.buttonText);
    document.documentElement.style.setProperty('--table-background1', style.tableBackground1);
    document.documentElement.style.setProperty('--table-background2', style.tableBackground2);
    document.documentElement.style.setProperty('--table-header', style.tableHeader);
    document.documentElement.style.setProperty('--table-text', style.tableText);
    document.documentElement.style.setProperty('--table-buttons', style.tableButtons);
    document.documentElement.style.setProperty('--hyperlink_pc', style.hyperlinkPC);
    document.documentElement.style.setProperty('--hyperlink-ac', style.hyperlinkAC);
  }
}
