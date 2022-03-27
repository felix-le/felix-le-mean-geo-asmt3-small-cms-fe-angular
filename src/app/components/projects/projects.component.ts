import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectApiService } from 'src/app/services/projectApi.service';

import { AuthService } from '../../services/auth.service';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  lstProjects = [];
  closeResult = '';
  selectedProjectId = '';
  constructor(
    private _projectApiService: ProjectApiService,
    private _AuthService: AuthService,
    private modalService: NgbModal
  ) {}

  @ViewChild('content') content: any;

  ngOnInit() {
    this._projectApiService.getProjects().subscribe((res) => {
      this.lstProjects = res.data;
    });
  }
  isLoggedIn() {
    // from AuthService
    return this._AuthService.IsLoggedIn();
  }

  // Edit Project
  open(formId: any, project: any) {
    this.modalService.open(formId, { ariaLabelledBy: 'editProject' });
    this.selectedProjectId = project._id;
  }

  onSubmitEdit(data: any) {
    this._projectApiService
      .updateProject(this.selectedProjectId, data)
      .subscribe(
        (response) => {
          if (response['statusCode'] === 200) {
            setTimeout(() => this.ngOnInit(), 3000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  onDeleteProject(project: any) {
    this._projectApiService.deleteProject(project._id).subscribe((res) => {
      console.log(res);
      this.lstProjects = this.lstProjects.filter(
        (p) => p['_id'] !== project._id
      );
    });
  }
  // Create Project
  openCreate(formId: any) {
    this.modalService.open(formId, { ariaLabelledBy: 'createProject' });
  }
  onSubmitCreate(data: any) {
    this._projectApiService.createProject(data).subscribe((res) => {
      if (res['statusCode'] === 200) {
        setTimeout(() => this.ngOnInit(), 3000);
      }
    });
  }
}
