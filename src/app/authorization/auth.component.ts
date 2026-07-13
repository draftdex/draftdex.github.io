import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { BottomBannerComponent } from '../bottom-banner/bottom-banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SupabaseService } from '../shared/services/supabase-service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    imports: [ReactiveFormsModule, BottomBannerComponent, LoginComponent, RegisterComponent]
})
export class AuthComponent implements OnInit {
  loginForm = true;
  availableTeams: string[] = [];

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.supabaseService.getUnclaimedTeams().subscribe(res => this.availableTeams = res)
  }
}
