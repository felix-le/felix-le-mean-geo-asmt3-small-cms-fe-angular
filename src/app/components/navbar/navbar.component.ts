import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserApiService } from '../../services/userApi.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private _UserApiService: UserApiService, // private private
    private cookieService: CookieService //   data: String, // }
  ) {}
  user = {} as any;
  ngOnInit(): void {}
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
  onSubmit(data: any) {
    // Login with user data and get token
    if (data.email && data.password) {
      this._UserApiService.login(data).subscribe(async (res: any) => {
        // set refreshToken equal res.data
        let refreshToken = res.data;
        // set refreshToken in cookie
        this.cookieService.set('refreshToken', refreshToken);
      });
    }
  }
}
