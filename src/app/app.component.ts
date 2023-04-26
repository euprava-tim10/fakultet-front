import { Component } from '@angular/core';
import { AuthManagerService } from './auth/auth-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakultet-front';

  isLoggedIn = false;
  isAdmin = false;
  isStudent = false;

  constructor(
    private authManagerService: AuthManagerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(x => {
      this.isLoggedIn = this.authManagerService.isLoggedIn();
      this.isAdmin = this.authManagerService.isAdmin();
      this.isStudent = this.authManagerService.isStudent();
    });
  }

  handleLogout() {
    this.isLoggedIn = false;
    this.authManagerService.logoutUserAndRedirect();
  }
}
