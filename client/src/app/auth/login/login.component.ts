import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../common/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  aSab!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  onLogin(){
    this.loginForm.disable()

    this.aSab = this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['dashboard/indicators'])
      },
      error => {
        this.loginForm.reset()
        this.loginForm.enable()
        alert(error.error.message)
      }
    )
  }

  ngOnDestroy() {
    this.aSab.unsubscribe()
  }
}
