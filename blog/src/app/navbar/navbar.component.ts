import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {LoginComponent} from "../components/login/login.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  static isLogged = false;

  ngOnInit(): void {
  }
  constructor(public authService: AuthService, public router: Router) {
  }

  logOut() {
    if(this.authService.isLoggedIn() !== false){
      this.authService.logout().subscribe(() => {
        NavbarComponent.isLogged = false;
        this.router.navigate(['/']);
      });
    }
  }
  getIsLogged(){
    return NavbarComponent.isLogged;
  }

}
