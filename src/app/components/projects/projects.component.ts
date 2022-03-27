import { Component, OnInit } from '@angular/core';
import { ProjectApiService } from 'src/app/services/projectApi.service';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  lstProjects = [];

  constructor(
    private _projectApiService: ProjectApiService,
    private _AuthService: AuthService
  ) {}

  ngOnInit() {
    this._projectApiService.getProjects().subscribe((res) => {
      this.lstProjects = res.data;
    });
  }
  isLoggedIn() {
    // from AuthService
    return this._AuthService.IsLoggedIn();
  }
  onEditProject(project: any) {
    console.log('🚀 ~ ==== onEditProject ~ project', project);
  }
  onDeleteProject(project: any) {
    console.log('🚀 ~ ==== onDeleteProject ~ project', project);
  }
}
