import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

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
    this.router.navigate(['/Dashbord/dashboard1/'+link]);
  }

}
