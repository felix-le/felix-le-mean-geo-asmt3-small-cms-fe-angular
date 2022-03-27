import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  login(data: any) {
    return this.httpClient.post(
      'https://mean-geo-asmt3-small-cms-be.herokuapp.com/users/login',
      data
    );
  }
}
