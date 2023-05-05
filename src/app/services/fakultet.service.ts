import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { Konkurs } from '../model/Konkurs';
import { Smer } from '../model/Smer';

@Injectable({
  providedIn: 'root'
})
export class FakultetService {

  private server = 'http://localhost:8001';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getFakultetKonkursi(fakultetId: number) {
    return this.httpClient.get<Konkurs[]>(`${this.server}/api/fakulteti/${fakultetId}/konkursi`, this.options);
  }

  raspisiKonkurs(fakultetId: number, konkurs: Konkurs) {
    return this.httpClient.post<number>(`${this.server}/api/fakulteti/${fakultetId}/konkursi`, JSON.stringify(konkurs), this.options);
  }

  getFakultetStudenti(fakultetId: number) {
    return this.httpClient.get<Student[]>(`${this.server}/api/fakulteti/${fakultetId}/studenti`, this.options);
  }

  getFakultetSmerovi(fakultetId: number) {
    return this.httpClient.get<Smer[]>(`${this.server}/api/fakulteti/${fakultetId}/smerovi`, this.options);
  }
}
