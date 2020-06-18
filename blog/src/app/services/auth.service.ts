import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Token} from "../models/token";
import {map} from "rxjs/operators";
import {JwtHelper} from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  authenticate() {
    return this.http.get(this.url + '/basicauth');
  }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/user/create', credentials);
  }

  logout() {
      return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
        .pipe(
          map(() => {
            localStorage.removeItem('token');
          })
        );
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    return new JwtHelper().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

