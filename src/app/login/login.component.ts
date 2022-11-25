import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization-service';
import * as argon2 from 'argon2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  authentication$: Observable<boolean> | undefined;
  user$: Observable<User | null | undefined> | undefined;

  constructor(private authService: AuthService,
              private authorizaiontService: AuthorizationService) { }

  ngOnInit(): void {
    this.authentication$ = this.authService.isAuthenticated$;
    this.user$ = this.authService.user$;
    this.authorizaiontService.signUp();
    //TODO -- Email verification turned off - see if we can register users without emails
  }

  register(user: string, password: string) {
    // put this in auth service
    // const hash = await argon2.hash(password, {
    //   memoryCost: 65536, // 64KB,
    //   timeCost: 3, // # iters,
    //   parallelism: 4
    // })
  }

  login(user?: string, password?: string) {
    // query db for stored hash password
    // const match = await argon2.verify(hash, password);
    this.authService.loginWithPopup();
  }

  logout() {
    this.authService.logout();
  }

}
