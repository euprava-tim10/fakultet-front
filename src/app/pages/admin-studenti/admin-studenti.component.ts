import { Component } from '@angular/core';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';
import { Student } from 'src/app/model/Student';
import { FakultetService } from 'src/app/services/fakultet.service';

@Component({
  selector: 'app-admin-studenti',
  templateUrl: './admin-studenti.component.html',
  styleUrls: ['./admin-studenti.component.css']
})
export class AdminStudentiComponent {
  
  principal: any;

  studenti: Student[] = [];

  constructor(
    private fakultetService: FakultetService,
    private authManagerService: AuthManagerService
  ) {}
  
  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.fakultetService.getFakultetStudenti(this.principal!!.fakultetId).subscribe(s => this.studenti = s);
  }
}
