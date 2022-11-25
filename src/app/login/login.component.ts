import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization-service';
import * as argon2 from 'argon2';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { BottomBannerComponent } from '../bottom-banner/bottom-banner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule, BottomBannerComponent]
})
export class LoginComponent implements OnInit {
  
  authentication$: Observable<boolean> | undefined;
  loginCreds: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    // this.authorizationService.signUp();
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
    // this.authService.loginWithPopup();
    console.log(this.loginCreds.value);
  }

  logout() {
    //this.authService.logout();
  }

}
