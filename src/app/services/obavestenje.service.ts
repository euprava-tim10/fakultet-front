import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obavestenje } from '../model/Obavestenje';

@Injectable({
  providedIn: 'root'
})
export class ObavestenjeService {

  private server = 'http://localhost:8001';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getObavestenja() {
    return this.httpClient.get<Obavestenje[]>(`${this.server}/api/obavestenja`, this.options);
  }

  getBrojNeprocitanihObavestenja() {
    return this.httpClient.get<number>(`${this.server}/api/obavestenja/brojNeprocitanih`, this.options);
  }
}
