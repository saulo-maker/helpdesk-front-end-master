import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salao } from '../models/salao';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Salao[]> {

    return this.http.get<Salao>('${API_CONFIG.baseUrl}/salao');

  }

}
