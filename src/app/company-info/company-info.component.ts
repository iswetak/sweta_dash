import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators ,FormsModule, FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  loginForm:FormGroup
  submitted = false;  

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.add()

  }
      add() {
        this.loginForm = this.fb.group({
          companyname: new FormControl('', (Validators.required)),
      })
    }

      submitForm() {
        console.log(this.loginForm.value);
      }
}
