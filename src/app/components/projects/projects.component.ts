import { Component, OnInit } from '@angular/core';
import { ProjectApiService } from 'src/app/services/projectApi.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  lstProjects = [];
  constructor(private _projectApiService: ProjectApiService) {}

  ngOnInit() {
    this._projectApiService.getProjects().subscribe((res) => {
      this.lstProjects = res.data;
      console.log('🚀 ~ =====', this.lstProjects);
    });
  }
}
