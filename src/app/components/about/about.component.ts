import { Component, OnInit } from '@angular/core';
import { SectionApiService } from '../../services/sectionApi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  lstSections = [];

  constructor(private _sectionApiService: SectionApiService) {}

  ngOnInit() {
    this._sectionApiService.getSections().subscribe((res) => {
      this.lstSections = res.data;
      console.log(
        '🚀 ~ file: about.component.ts ~ line 11 ~ AboutComponent ~ lstSections',
        this.lstSections
      );
    });
  }
}
