import { Component } from '@angular/core';
import { Obavestenje } from 'src/app/model/Obavestenje';
import { ObavestenjeService } from 'src/app/services/obavestenje.service';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent {

  obavestenja: Obavestenje[] = [];

  constructor(
    private obavestenjeService: ObavestenjeService
  ) {}

  ngOnInit() {
    this.obavestenjeService.getObavestenja().subscribe(o => this.obavestenja = o);
  }
}
