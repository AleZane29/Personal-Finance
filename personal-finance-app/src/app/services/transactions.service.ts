import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Metodo per recuperare il file JSON
  // getJSON(): Observable<any> {
  //   return this.http.get('https://api.restful-api.dev/objects');
  // }
}
