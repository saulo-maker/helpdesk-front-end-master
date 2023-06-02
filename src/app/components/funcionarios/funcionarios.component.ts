import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})

export class FuncionariosComponent implements OnInit{
cancelarAdicao() {
throw new Error('Method not implemented.');
}
newEmployee: any;
adicionarFuncionario() {
throw new Error('Method not implemented.');
}

  ELEMENT_DATA: Funcionarios[] = [
    {
      cpf: '564.657.345-24',
      nome: 'Luciana Silva Rocha',
      email: 'LucianaSilva123@gmail.com',
      senha: '1234',
      perfis: ['0']
    }
  ]

  displayedColumns: string[] = ['cpf', 'nome', 'email', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Funcionarios>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: FuncionariosService
  ) { }

  ngOnInit(): void {

    this.findAll();

  }

  findAll() {

    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Funcionarios>(resposta);
      this.dataSource.paginator = this.paginator;
    })

  }

}

