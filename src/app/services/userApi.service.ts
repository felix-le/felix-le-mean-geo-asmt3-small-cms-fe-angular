import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  login(data: any) {
    return this.httpClient.post('http://139.177.199.11:5500/users/login', data);
  }
}
