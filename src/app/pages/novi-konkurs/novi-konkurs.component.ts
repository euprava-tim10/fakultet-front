import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthManagerService } from 'src/app/auth/auth-manager.service';
import { Konkurs } from 'src/app/model/Konkurs';
import { KvotaSmer } from 'src/app/model/KvotaSmer';
import { FakultetService } from 'src/app/services/fakultet.service';

@Component({
  selector: 'app-novi-konkurs',
  templateUrl: './novi-konkurs.component.html',
  styleUrls: ['./novi-konkurs.component.css']
})
export class NoviKonkursComponent {

  principal: any;

  konkurs: Konkurs = {
    id: 0,
    statusKonkursa: 'AKTIVAN',
    datumRaspisivanja: '',
    datumOkoncavanja: '',
    fakultet: undefined,
    kvote: []
  };

  constructor(
    private fakultetService: FakultetService,
    private authManagerService: AuthManagerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.principal = this.authManagerService.getPrincipal();

    this.fakultetService.getFakultetSmerovi(this.principal.fakultetId).subscribe(smerovi => {
      this.konkurs.kvote = smerovi.map(s => {
        let kvotaSmer: KvotaSmer = {
          id: 0,
          kvota: 0,
          smer: s
        };

        return kvotaSmer;
      });
    });
  }

  onInputKvota(k: KvotaSmer, e: Event) {
    k.kvota = Number((e.target as HTMLInputElement).value);
  }

  onRaspisiKonkurs() {
    this.fakultetService.raspisiKonkurs(this.principal.fakultetId, this.konkurs).subscribe(id => {
      this.router.navigateByUrl('/admin/konkursi');
    });
  }
}
