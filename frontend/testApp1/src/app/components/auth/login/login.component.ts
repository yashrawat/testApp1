import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(private fb: FormBuilder, public authService: AuthService) { }

  // On login this will execute
  // tslint:disable-next-line: typedef
  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
