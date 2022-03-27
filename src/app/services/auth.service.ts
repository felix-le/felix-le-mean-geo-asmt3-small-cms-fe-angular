import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:5500/';
  constructor(
    private httpClient: HttpClient,
    private _CookieService: CookieService
  ) {}

  proceedLogin(data: any) {
    return this.httpClient.post(`${this.apiUrl} + users/login`, data);
  }

  IsLoggedIn() {
    return !!this._CookieService.get('refreshToken');
  }
  GetToken() {
    return this._CookieService.get('refreshToken') || '';
  }
}
