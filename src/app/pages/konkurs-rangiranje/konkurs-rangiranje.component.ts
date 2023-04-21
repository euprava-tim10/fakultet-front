import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrijavaKonkurs } from 'src/app/model/PrijavaKonkurs';
import { KonkursService } from 'src/app/services/konkurs.service';

@Component({
  selector: 'app-konkurs-rangiranje',
  templateUrl: './konkurs-rangiranje.component.html',
  styleUrls: ['./konkurs-rangiranje.component.css']
})
export class KonkursRangiranjeComponent {

  konkursId = 0;
  smerId = 0;

  prijave: PrijavaKonkurs[] = [];

  constructor(
    private konkursService: KonkursService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.konkursId = parseInt(params['konkursId']);
      this.smerId = parseInt(params['smerId']);

      this.konkursService.getKonkursPrijavePoSmeru(this.konkursId, this.smerId).subscribe(p => this.prijave = p);
    });
  }
}
