import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  // getProjects(): Observable<any> {
  //   return this.httpClient.get(
  //     'https://mean-geo-asmt3-small-cms-be.herokuapp.com/projects'
  //   );
  // }
  login(data: any) {
    // http://localhost:5500/users/login
    return this.httpClient.post('http://localhost:5500/users/login', data);
  }
}
