import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    city:null,
    contactNo: null,
    zip:null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

    
  // registrationform = new FormGroup({
  //   //username : new FormControl('Amit'), //default value
  //   username : new FormControl('',
  //             [Validators.required, Validators.minLength(4)]),
  //   email:new FormControl(''),
  //   password : new FormControl(''),
  //   city:new FormControl(''),
  //   contactNo: new FormControl(''),
  //   zip: new FormControl('')
  // });

  onSubmit(): void {
   const { username, email, password,city,contactNo,zip } = this.form;
    // const data=JSON.stringify(this.registrationform.value);
    // console.log()
    this.authService.register(username, email, password, city, contactNo, zip).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.gotoLogin();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  gotoLogin(){
      this.router.navigate(['/login']);
  }
}
