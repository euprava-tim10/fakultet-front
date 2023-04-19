import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Konkurs } from '../model/Konkurs';

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
}
