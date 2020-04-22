import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss']
})
export class ChatlistComponent implements OnInit {
  person = Person;
  constructor() { }

  ngOnInit(): void {
    console.log('person --> ' + this.person.length);
  }

  
  
  

}
