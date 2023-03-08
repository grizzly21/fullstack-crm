import { IUserInfo } from '../../interfaces/user-info.interface'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup
  aSab!: Subscription

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl(null, [Validators.required]),
    })
  }

  onRegister() {
    this.registerForm.disable()
    const user: IUserInfo = {
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      displayName: this.registerForm.get('name')?.value,
    }

    this.aSab = this.authService.register(user).subscribe(
      () => {
        this.registerForm.reset()
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true,
          },
        })
      },
      (err) => {
        this.registerForm.reset()
        this.registerForm.enable()
        alert(err.error.message)
      }
    )
  }

  ngOnDestroy() {
    if (this.aSab) {
      this.aSab.unsubscribe()
    }
  }
}
