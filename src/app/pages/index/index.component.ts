import { Component } from '@angular/core';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  isAdmin = false;
  isStudent = false;

  constructor(
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authManagerService.isAdmin();
    this.isStudent = this.authManagerService.isStudent();
  }

  handleLogout() {
    this.authManagerService.logoutUserAndRedirect();
  }
}
