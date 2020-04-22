import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup,FormControl, Validators ,FormsModule, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  submitted = false; 
  apiError = ""
  constructor(private authservice: ApiService,public fb: FormBuilder,private router:Router) { }
  omit_special_char(event)
  {   
     var k;  
     k = event.charCode; 
     return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }

  ngOnInit() {  
    this.add()  }

    add() {
    this.loginForm = this.fb.group({
    Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  })
}

      submitForm() {
        console.log(this.loginForm.value);
        this.apiError = null
       if(this.loginForm.invalid){
         console.log("form is invalid, wont continue")
         return;
       }
        // this.authservice.createlogin(this.loginForm.value).subscribe(
        //   res => {
        //   console.log('login sucessfully!' + JSON.stringify(res))
        //   this.authservice.userID=res.userID
        
        //   console.log('redirecting');
        //   this.router.navigate(['/twofa']);
        //   },
          error=>{
            console.log("error ocurred",error)
            this.apiError = error.error.message;
            
          }
          
          // );
        
      }

}