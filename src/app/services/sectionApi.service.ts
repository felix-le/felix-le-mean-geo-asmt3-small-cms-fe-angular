import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SectionApiService {
  constructor(private httpclient: HttpClient) {}

  getSections(): Observable<any> {
    return this.httpclient.get('http://139.177.199.11:5500/sections');
  }
}
