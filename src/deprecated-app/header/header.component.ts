import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './../../styles.scss']
})
export class HeaderComponent {
  public logoPath: string = "../assets/DraftDexTitle.png";

  constructor(public authService: AuthService,
    private router: Router) { 
      if (this.authService.userSession.team !== 'WW') this.logoPath = "../assets/DraftDexTitleWhite.png";
    }

  public navigateToHome(): void {
    this.router.navigate(['pokemon-search']).then();
  }
}
