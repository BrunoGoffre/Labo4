import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  valueInputs = '';
  edadUno:number = 0;
  edadDos:number = 0;
  resultadoSuma:number = 0;
  resultadoPromedio:number = 0;

  constructor(){
    
  }
  Sumar(){
      this.resultadoSuma = this.edadUno + this.edadDos;
  }
  Promediar(){
    this.resultadoPromedio = (this.edadUno + this.edadDos) / 2;
  }
  Limpiar(){
    this.edadDos = 0;
    this.edadUno = 0;
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
  }
}

  
  
  
