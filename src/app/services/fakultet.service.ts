import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class FakultetService {

  private server = 'http://localhost:8080';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getFakultetStudenti(fakultetId: number) {
    return this.httpClient.get<Student[]>(`${this.server}/api/fakulteti/${fakultetId}/studenti`, this.options);
  }
}
