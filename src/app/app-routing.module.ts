import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path: '', component:BienvenidoComponent},
  {path: 'error', component:ErrorComponent},
  {path: 'Login', component:LoginComponent},
  {path: '**', component:BienvenidoComponent},
  {path: 'calculadora', component:CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
