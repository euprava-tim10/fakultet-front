import { Component } from '@angular/core';
import { ObavestenjeService } from 'src/app/services/obavestenje.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent {
  
  brojNeprocitanihObavestenja = 0;
  
  constructor(
    private obavestenjeService: ObavestenjeService
  ) {}

  ngOnInit() {
    this.obavestenjeService.getBrojNeprocitanihObavestenja().subscribe(b => this.brojNeprocitanihObavestenja = b);
  }
}
