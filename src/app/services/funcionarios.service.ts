import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionarios } from '../models/Funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Funcionarios[]> {

    return this.http.get<Funcionarios>('${API_CONFIG.baseUrl}/Funcionarios');

  }

}