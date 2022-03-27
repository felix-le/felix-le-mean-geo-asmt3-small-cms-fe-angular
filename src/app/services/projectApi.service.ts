import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://mean-geo-asmt3-small-cms-be.herokuapp.com/projects';
@Injectable()
export class ProjectApiService {
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  updateProject(projectId: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${projectId}/update`, data);
  }

  deleteProject(projectId: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${projectId}/delete`);
  }

  createProject(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/create`, data);
  }
}
