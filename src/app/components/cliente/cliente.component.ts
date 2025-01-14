import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Clientes } from 'src/app/models/Clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  ELEMENT_DATA: Clientes[] = []

  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'uf', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Clientes>(this.ELEMENT_DATA);


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
      this.dataSource = new MatTableDataSource<Clientes>(resposta);
      this.dataSource.paginator = this.paginator;
    })

  }
}
