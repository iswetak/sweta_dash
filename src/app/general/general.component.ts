import { Component, OnInit } from '@angular/core';
// import { MatIconRegistry } from "@angular/material/icon";
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { ModalComponent } from '../modal/modal.component';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  isShow = false;
  mode = new FormControl('side');
  enable(){
    this.isShow = false
 }

 disable(){
  this.isShow = true
 } 

 constructor(private router:Router) { }

//  openModal() {
//   const dialogConfig = new MatDialogConfig();
//   // The user can't close the dialog by clicking outside its body
//   dialogConfig.disableClose = true;
//   dialogConfig.id = "modal-component";
//   dialogConfig.height = "350px";
//   dialogConfig.width = "600px";
//   // https://material.angular.io/components/dialog/overview
//   const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
// }

  ngOnInit(): void {
  }

  openLink(link:string){
    console.log("navigate:"+link)
    this.router.navigate(['/Dashboard/General/'+link]);
  }


}
