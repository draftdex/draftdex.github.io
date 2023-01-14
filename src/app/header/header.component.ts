import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authorization/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayMenu: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
