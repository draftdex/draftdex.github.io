import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent implements OnInit {
  
  authentication$: Observable<boolean> | undefined;
  loginCreds: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

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
