import { Component } from '@angular/core';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';
import { Konkurs } from 'src/app/model/Konkurs';
import { FakultetService } from 'src/app/services/fakultet.service';

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
    private authManagerService: AuthManagerService
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.fakultetService.getFakultetKonkursi(this.principal.fakultetId).subscribe(k => this.konkursi = k);
  }
  
  onOkoncajKonkurs(konkursId: number) {
    
  }
}
