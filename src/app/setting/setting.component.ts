import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  message: string = 'Apply changes.';
  actionButtonLabel: string = '';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 4000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   
  scrollItems: number[] = [];
  constructor(public snackBar: MatSnackBar, public matDialog: MatDialog) { 
    for (let index = 0; index < 10000; index++) {
      this.scrollItems.push(index);
    }
  }

  isShow = false;
  enable(){
    this.isShow = false
 }

 disable(){
  this.isShow = true
 } 

  ngOnInit(): void {
  }

  open() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }
  // open(message: string, action: string, className: string) {
  //   let config = new MatSnackBarConfig();
  //   config.horizontalPosition = this.horizontalPosition;
  //   this.snackBar.open(message, action, {
  //     duration: 3000,
      
  //     panelClass: ['mat-toolbar', 'mat-primary']
  //   });
  // }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "160px";
    dialogConfig.width = "550px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }


  // open(){
  //   let config = new MatSnackBarConfig();
  //   config.verticalPosition = this.verticalPosition;
  //   config.horizontalPosition = this.horizontalPosition;
  //   config.duration = this.setAutoHide ? this.autoHide : 0;
  //   this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);

  // }

}
