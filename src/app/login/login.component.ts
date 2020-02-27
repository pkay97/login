import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', []),
      password: new FormControl('', [])
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
        this.authenticationService.login(this.f.username.value, this.f.password.value);
  }

}
