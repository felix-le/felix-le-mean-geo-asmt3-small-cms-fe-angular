import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  closeResult = '';
  user = {
    email: 'rich.freeman@georgiancollege.ca',
    password: 'youarethebest',
  } as any;
  constructor(
    private modalService: NgbModal,
    private _AuthService: AuthService, // private private
    private cookieService: CookieService //   data: String, // }
  ) {}
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
      this._AuthService.proceedLogin(data).subscribe((res: any) => {
        // set refreshToken equal res.data
        let refreshToken = res.data;
        // set refreshToken in cookie
        this.cookieService.set('refreshToken', refreshToken);
      });
    }
  }
  isLoggedIn() {
    // from AuthService
    return this._AuthService.IsLoggedIn();
  }
  logOut() {
    // from AuthService
    return this._AuthService.logOut();
  }
}
