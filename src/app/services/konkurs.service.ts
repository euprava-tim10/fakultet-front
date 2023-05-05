import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Konkurs } from '../model/Konkurs';
import { Smer } from '../model/Smer';
import { PrijavaKonkurs } from '../model/PrijavaKonkurs';

@Injectable({
  providedIn: 'root'
})
export class KonkursService {

  private server = 'http://localhost:8001';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getAktivniKonkursi() {
    return this.httpClient.get<Konkurs[]>(`${this.server}/api/konkursi`, this.options);
  }

  getKonkurs(konkursId: number) {
    return this.httpClient.get<Konkurs>(`${this.server}/api/konkursi/${konkursId}`, this.options);
  }

  getKonkursPrijavePoSmeru(konkursId: number, smerId: number) {
    return this.httpClient.get<PrijavaKonkurs[]>(`${this.server}/api/konkursi/${konkursId}/smerovi/${smerId}/prijave`, this.options);
  }

  getDozvoljeniSmerovi(konkursId: number) {
    return this.httpClient.get<Smer[]>(`${this.server}/api/konkursi/${konkursId}/dozvoljeniSmerovi`, this.options);
  }

  kreirajPrijavu(konkursId: number, prijavaKonkurs: PrijavaKonkurs) {
    return this.httpClient.post<number>(`${this.server}/api/konkursi/${konkursId}/prijave`, JSON.stringify(prijavaKonkurs), this.options);
  }

  okoncajPrijave(konkursId: number) {
    return this.httpClient.put(`${this.server}/api/konkursi/${konkursId}/okoncaj_prijave`, '', this.options);
  }

  okoncajKonkurs(konkursId: number) {
    return this.httpClient.put(`${this.server}/api/konkursi/${konkursId}/okoncaj_konkurs`, '', this.options);
  }
}
