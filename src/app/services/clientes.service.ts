import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  // findAll(): Observable<Clientes[]> {

  //   return this.http.get<Clientes>('${API_CONFIG.baseUrl}/clientes');

  // }

}
