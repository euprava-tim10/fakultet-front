import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrijavaKonkurs } from 'src/app/model/PrijavaKonkurs';
import { Smer } from 'src/app/model/Smer';
import { KonkursService } from 'src/app/services/konkurs.service';

@Component({
  selector: 'app-prijava-konkurs',
  templateUrl: './prijava-konkurs.component.html',
  styleUrls: ['./prijava-konkurs.component.css']
})
export class PrijavaKonkursComponent {
  
  konkursId = 0;

  smerovi: Smer[] = [];
  prvaZelja: Smer | undefined = undefined;

  constructor(
    private konkursService: KonkursService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.konkursId = parseInt(params['id']);

      this.konkursService.getDozvoljeniSmerovi(this.konkursId).subscribe(s => {
        this.smerovi = s;
        this.prvaZelja = s[0];
      });
    });
    
  }

  onSetSmer(e: Event) {
    let smerId = Number((e.target as HTMLInputElement).value);

    this.prvaZelja = this.smerovi.find(s => s.id == smerId);
  }

  onPrijaviSe() {
    let prijavaKonkurs: PrijavaKonkurs = {
      id: 0,
      prosek: 0,
      konkurs: undefined,
      student: undefined,
      prvaZelja: this.prvaZelja,
      statusPrijave: 'NA_CEKANJU'
    };

    this.konkursService.kreirajPrijavu(this.konkursId, prijavaKonkurs).subscribe(id => {
      this.router.navigateByUrl(`student/konkursi`);
    });
  }
}
