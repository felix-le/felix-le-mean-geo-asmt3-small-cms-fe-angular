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
    console.log('🚀 ~ ==== onDeleteProject ~ project', project);
  }
  onSubmitEdit(data: any) {
    console.log(data);
  }

  open(formId: any, data: any) {
    this.modalService.open(formId, { ariaLabelledBy: 'editProject' });

    this.onSubmitEdit(data);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
