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

  onDeleteProject(project: any) {
    // const { name, description, date, client, status, technologies, link } =
    //   project;
  }

  // Edit Project
  open(formId: any, project: any) {
    this.modalService.open(formId, { ariaLabelledBy: 'editProject' });
    this.selectedProjectId = project._id;
    this.onSubmitEdit(project);
  }
  onSubmitEdit(data: any) {
    this._projectApiService
      .updateProject(this.selectedProjectId, data)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
