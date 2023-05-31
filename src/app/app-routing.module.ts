import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent, children: [
      { path: 'home', component: HomeComponent }, {
        path: 'cliente', component: ClienteComponent
      },{
        path: 'funcionarios', component: FuncionariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
