import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-zavrsi-studije',
  templateUrl: './zavrsi-studije.component.html',
  styleUrls: ['./zavrsi-studije.component.css']
})
export class ZavrsiStudijeComponent {

  studentId = 0;
  statusStudijaId = 0;

  prosek = 0;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = parseInt(params['studentId']);
      this.statusStudijaId = parseInt(params['statusStudijaId']);
    });
  }

  onChangeProsek(e: Event) {
    this.prosek = Number((e.target as HTMLInputElement).value);
  }

  onZavrsiStudije() {
    let zavrsiStudije = {
      prosek: this.prosek
    };

    this.studentService.zavrsiStudije(this.studentId, this.statusStudijaId, zavrsiStudije).subscribe(x => {
      this.router.navigateByUrl(`/studenti/${this.studentId}`);
    });
  }
}
