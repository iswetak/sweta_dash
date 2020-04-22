import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
  }

  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }


// If the user clicks the cancel button a.k.a. the go back button, then\
// just close the modal
closeModal() {
  this.dialogRef.close();
}


}
