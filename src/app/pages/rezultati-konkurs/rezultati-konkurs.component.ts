import { Component } from '@angular/core';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';
import { PrijavaKonkurs } from 'src/app/model/PrijavaKonkurs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-rezultati-konkurs',
  templateUrl: './rezultati-konkurs.component.html',
  styleUrls: ['./rezultati-konkurs.component.css']
})
export class RezultatiKonkursComponent {

  principal: any;

  prijave: PrijavaKonkurs[] = [];

  constructor(
    private studentService: StudentService,
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.studentService.getStudentovePrijaveKonkurs(this.principal.id).subscribe(p => this.prijave = p);
  }

  onPrihvatiPrijavu(prijava: PrijavaKonkurs) {
    this.studentService.prihvatiPrijavu(this.principal.id, prijava.id).subscribe(x => {
      prijava.statusPrijave = 'PRIHVACENA';
    });
  }

  onOdbijPrijavu(prijava: PrijavaKonkurs) {
    this.studentService.odbijPrijavu(this.principal.id, prijava.id).subscribe(x => {
      prijava.statusPrijave = 'ODBIJENA';
    });
  }
}
