import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

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
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })

    this.route.queryParams.subscribe(
      (params) => {
        if(params['registered']){
          // message
        }else if(params['accessDenied']){
          //message
        }
      }
    )
  }

  onLogin(){
    this.loginForm.disable()

    this.aSab = this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/analytics'])
      },
      error => {
        this.loginForm.reset()
        this.loginForm.enable()
        alert(error.error.message)
      }
    )
  }

  ngOnDestroy() {
    //this.aSab.unsubscribe()
  }
}
