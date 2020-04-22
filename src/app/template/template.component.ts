import { Component, OnInit } from '@angular/core';
import { Template } from './Template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  template = Template;

  constructor() { }

  ngOnInit() {
    console.log('template --> ' + this.template.length);
  }
}
