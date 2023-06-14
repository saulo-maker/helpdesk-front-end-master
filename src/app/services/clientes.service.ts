import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  readonly apiURL : string;

  constructor(private http: HttpClient) {
    this.apiURL = "http://localhost:8080";
  }

  findAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${this.apiURL}/cliente`);
  }

}
