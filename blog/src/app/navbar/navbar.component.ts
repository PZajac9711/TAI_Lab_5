import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(public authService: AuthService, public router: Router) {
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
