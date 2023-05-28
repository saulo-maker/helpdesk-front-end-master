import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Salao } from 'src/app/models/salao';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.css']
})
export class ChamadoComponent implements OnInit{
  
  ELEMENT_DATA: Salao[] = [
    {
      id: 1,
      nome: 'Valdinei Pereira',
      cpf: '123.456.789-10',
      email: 'valdiney@gmail.com',
      senha: '1234',
      perfis: ['0'],
      data: '13/02/2023'
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'data', 'acoes'];
  dataSource = new MatTableDataSource<Salao>(this.ELEMENT_DATA);

  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ClientesService
  ) { }

  ngOnInit(): void {

    this.findAll();

  }
 
  findAll() {

    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Salao>(resposta);
      this.dataSource.paginator = this.paginator;
    })

  }

}

