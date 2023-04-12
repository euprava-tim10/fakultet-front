import { Component } from '@angular/core';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(
    private authManagerService: AuthManagerService
  ) {}

  handleLogout() {
    this.authManagerService.logoutUserAndRedirect();
  }
}
