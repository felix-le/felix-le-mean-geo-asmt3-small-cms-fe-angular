import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SectionApiService {
  constructor(private httpclient: HttpClient) {}

  getSections(): Observable<any> {
    return this.httpclient.get(
      'https://mean-geo-asmt3-small-cms-be.herokuapp.com/sections'
    );
  }
}
