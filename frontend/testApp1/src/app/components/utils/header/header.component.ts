import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authListenerSubs: Subscription;
  userIsAuthenticated = true;

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  onLogout() {
    this.authService.logout();
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
