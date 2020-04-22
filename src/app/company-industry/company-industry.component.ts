import { Component, OnInit } from '@angular/core';
import { Info1 } from './Info1';

@Component({
  selector: 'app-company-industry',
  templateUrl: './company-industry.component.html',
  styleUrls: ['./company-industry.component.scss']
})
export class CompanyIndustryComponent implements OnInit {
  info1 = Info1;

  constructor() { }

  ngOnInit(): void {
    console.log('info1 --> ' + this.info1.length);
  }
}
