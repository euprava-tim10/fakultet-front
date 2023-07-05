import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { StatusStudija } from '../model/StatusStudija';
import { ZavrsiStudije } from '../model/ZavrsiStudije';
import { PrijavaKonkurs } from '../model/PrijavaKonkurs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private server = 'http://localhost:8001';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private options = {headers: this.headers};

  constructor(
    private httpClient: HttpClient
  ) { }

  getStudent(studentId: number) {
    return this.httpClient.get<Student>(`${this.server}/api/studenti/${studentId}`, this.options);
  }

  getStudentStatusiStudija(studentId: number) {
    return this.httpClient.get<StatusStudija[]>(`${this.server}/api/studenti/${studentId}/statusiStudija`, this.options);
  }

  zavrsiStudije(studentId: number, statusStudijaId: number, zavrsiStudije: ZavrsiStudije) {
    return this.httpClient.put(`${this.server}/api/studenti/${studentId}/statusiStudija/${statusStudijaId}/zavrsi`, JSON.stringify(zavrsiStudije), this.options);
  }

  getStudentovePrijaveKonkurs(studentId: number) {
    return this.httpClient.get<PrijavaKonkurs[]>(`${this.server}/api/studenti/${studentId}/prijave`, this.options);
  }

  prihvatiPrijavu(studentId: number, prijavaId: number) {
    return this.httpClient.put(`${this.server}/api/studenti/${studentId}/prijave/${prijavaId}/prihvati`, '', this.options);
  }

  odbijPrijavu(studentId: number, prijavaId: number) {
    return this.httpClient.put(`${this.server}/api/studenti/${studentId}/prijave/${prijavaId}/odbij`, '', this.options);
  }
}
