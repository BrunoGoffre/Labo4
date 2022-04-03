import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hacemeClic(){
    
  }
  hiceClick(){
    console.log("redireccionando");
  }

}
