import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BottomBannerComponent } from '../bottom-banner/bottom-banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SupabaseService } from '../supabase-service';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [ReactiveFormsModule, CommonModule, BottomBannerComponent, LoginComponent, RegisterComponent]
})
export class AuthComponent implements OnInit {
  loginForm = true;
  availableTeams: string[] = [];

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.supabaseService.getUnclaimedTeams().subscribe(res => this.availableTeams = res)
  }

  login(user?: string, password?: string) {
    // query db for stored hash password
    // const match = await argon2.verify(hash, password);
    // this.authService.loginWithPopup();
  }

  logout() {
    //this.authService.logout();
  }

}
