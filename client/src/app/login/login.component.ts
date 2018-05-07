import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;
  loginForm: FormGroup;
  get username() { return this.loginForm.get('username') };
  get password() { return this.loginForm.get('password') };

  constructor(
    private auth: AuthService,
    private router: Router,
   // public toastr: ToastsManager,
    vcr: ViewContainerRef,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

   // this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() { }

  onLoginSubmit() {
    this.auth.authenticateUser({
      username: this.username.value,
      password: this.password.value
    }).subscribe(
      (res) => { 
        //console.log('success! ', res);
       // this.toastr.success('Login Successful!');
        this.user = res; 
        this.router.navigate(['/app']);
      },
      (err) => console.log(`Login Error: ${err.message}`)) //this.toastr.error
  }

  logout(){
    this.auth.logout();
    //this.toastr.success('Logout Successful');
  }

}
