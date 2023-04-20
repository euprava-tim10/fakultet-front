import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Konkurs } from '../model/Konkurs';
import { Smer } from '../model/Smer';
import { PrijavaKonkurs } from '../model/PrijavaKonkurs';

@Injectable({
  providedIn: 'root'
})
export class KonkursService {

  private server = 'http://localhost:8080';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getAktivniKonkursi() {
    return this.httpClient.get<Konkurs[]>(`${this.server}/api/konkursi`, this.options);
  }

  getDozvoljeniSmerovi(konkursId: number) {
    return this.httpClient.get<Smer[]>(`${this.server}/api/konkursi/${konkursId}/dozvoljeniSmerovi`, this.options);
  }

  kreirajPrijavu(konkursId: number, prijavaKonkurs: PrijavaKonkurs) {
    return this.httpClient.post<number>(`${this.server}/api/konkursi/${konkursId}/prijave`, JSON.stringify(prijavaKonkurs), this.options);
  }
}
