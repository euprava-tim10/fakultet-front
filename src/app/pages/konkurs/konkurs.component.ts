import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Konkurs } from 'src/app/model/Konkurs';
import { KonkursService } from 'src/app/services/konkurs.service';

@Component({
  selector: 'app-konkurs',
  templateUrl: './konkurs.component.html',
  styleUrls: ['./konkurs.component.css']
})
export class KonkursComponent {

  konkursId = 0;

  konkurs: Konkurs | undefined = undefined;

  constructor(
    private konkursService: KonkursService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.konkursId = parseInt(params['id']);

      this.konkursService.getKonkurs(this.konkursId).subscribe(k => this.konkurs = k);
    });
  }
}
