import { Component } from '@angular/core';
import { Konkurs } from 'src/app/model/Konkurs';
import { KonkursService } from 'src/app/services/konkurs.service';

@Component({
  selector: 'app-student-konkursi',
  templateUrl: './student-konkursi.component.html',
  styleUrls: ['./student-konkursi.component.css']
})
export class StudentKonkursiComponent {
  
  konkursi: Konkurs[] = [];
  
  constructor(
    private konkursService: KonkursService
  ) {}

  ngOnInit() {
    this.konkursService.getAktivniKonkursi().subscribe(k => this.konkursi = k);
  }
}
