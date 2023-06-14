import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionarios } from '../models/Funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  
  private apiURL : string;
  
  constructor(private http: HttpClient) {
    this.apiURL = "http://localhost:8080/funcionarios";
  }

  public findAll(): Observable<Funcionarios[]> {
    return this.http.get<Funcionarios[]>(this.apiURL);
  }

}