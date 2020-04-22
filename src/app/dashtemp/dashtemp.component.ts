import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashtemp',
  templateUrl: './dashtemp.component.html',
  styleUrls: ['./dashtemp.component.css']
})
export class DashtempComponent implements OnInit {

  isShow = false;
  mode = new FormControl('side');
  enable(){
    this.isShow = false
 }

 disable(){
  this.isShow = true
 }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  openLink(link:string){
    console.log("navigate:"+link)
    this.router.navigate(['/Dashboard/dashtemp/'+link]);
  }
}