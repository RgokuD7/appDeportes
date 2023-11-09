import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = false;

  get isLoggedIn() {
    return this._userIsAuthenticated;
  }

  constructor(private restApi: UsuarioService) {}

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}