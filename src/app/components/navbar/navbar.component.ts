import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal) {}
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
  onSubmit() {
    console.log('submit');
    console.log(
      "🚀 ~ file: navbar.component.ts ~ line 38 ~ NavbarComponent ~ onSubmit ~ document.querySelector('#heroForm')",
      document.querySelector('#heroForm')
    );
    // const url = 'http://localhost:8888/friends/addnew';
    // this.httpClient.post(url, f.value)
    //   .subscribe((result) => {
    //     this.ngOnInit(); //reload the table
    //   });
    // this.modalService.dismissAll(); //dismiss the modal
  }
}
