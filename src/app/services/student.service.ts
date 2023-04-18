import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { ZavrsiStudije } from '../model/ZavrsiStudije';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private server = 'http://localhost:8080';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getStudent(studentId: number) {
    return this.httpClient.get<Student>(`${this.server}/api/studenti/${studentId}`, this.options);
  }

  zavrsiStudije(studentId: number, statusStudijaId: number, zavrsiStudije: ZavrsiStudije) {
    return this.httpClient.put(`${this.server}/api/studenti/${studentId}/statusiStudija/${statusStudijaId}/zavrsi`, JSON.stringify(zavrsiStudije), this.options);
  }
}
