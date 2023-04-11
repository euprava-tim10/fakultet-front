import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  constructor(
      private router: Router
  ) { }

  loginUserAndRedirect(token: string) {
    localStorage.setItem('token', token);
    this.router.navigateByUrl('/');
  }

  logoutUserAndRedirect() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAnonymous() {
    return localStorage.getItem('token') == null;
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

}
