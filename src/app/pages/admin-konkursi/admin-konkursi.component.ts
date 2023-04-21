import { Component } from '@angular/core';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';
import { Konkurs } from 'src/app/model/Konkurs';
import { FakultetService } from 'src/app/services/fakultet.service';
import { KonkursService } from 'src/app/services/konkurs.service';

@Component({
  selector: 'app-admin-konkursi',
  templateUrl: './admin-konkursi.component.html',
  styleUrls: ['./admin-konkursi.component.css']
})
export class AdminKonkursiComponent {
  
  principal: any;

  konkursi: Konkurs[] = [];

  constructor(
    private fakultetService: FakultetService,
    private konkursService: KonkursService,
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.fakultetService.getFakultetKonkursi(this.principal.fakultetId).subscribe(k => this.konkursi = k);
  }
  
  onOkoncajPrijave(konkurs: Konkurs) {
    this.konkursService.okoncajPrijave(konkurs.id).subscribe(x => {
      konkurs.statusKonkursa = 'ZATVORENE_PRIJAVE';
    });
  }

  onOkoncajKonkurs(konkurs: Konkurs) {
    this.konkursService.okoncajKonkurs(konkurs.id).subscribe(x => {
      konkurs.statusKonkursa = 'ZATVOREN';
    });
  }
}
