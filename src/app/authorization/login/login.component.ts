import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStyle } from '../../shared/models/UserStyles.model';
import { StyleService } from '../../shared/services/style-service';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../../styles.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  @Output() onRegister = new EventEmitter();

  public authError: boolean = false;
  public loading: boolean = false;
  public loginCreds: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  styleService: StyleService = inject(StyleService);

  constructor(private authService: AuthService,
    private router: Router) {
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
          this.styleService.fetchUserStyles(this.authService.userSession.id).subscribe({
            next: (style: UserStyle | null) => {
              if (style) this.styleService.setUserStyles(style);
              this.router.navigate(['pokemon-search']);
            },
            error: (error: Error) => {
              console.error('Error getting user style', error);
              this.router.navigate(['pokemon-search']);
            }
          });
        } else {
          this.authError = true;
        }
      }, error: (error: Error) => console.error('Error authenticating user', error)
    });
  }
}
