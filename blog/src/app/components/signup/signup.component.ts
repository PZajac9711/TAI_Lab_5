import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isCreated = false;
  error;
  public credentials = {
    name: '',
    email: '',
    password: '',
    active: true
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.error = '';
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe(
      data => this.isCreated = true,
      error => this.error = 'Oops, coś poszło nie tak'
    );
  }

}
