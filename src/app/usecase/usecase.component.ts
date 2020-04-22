import { Component, OnInit } from '@angular/core';
import { Info } from './Info';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.scss']
})
export class UsecaseComponent implements OnInit {
  info = Info;

  constructor() { }

  ngOnInit(): void {
    console.log('info --> ' + this.info.length);
  }

}
