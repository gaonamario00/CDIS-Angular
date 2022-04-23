import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  isLista: boolean = true;
  isTable:boolean = false;
  isLog: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  lista(){
    this.isLista = true;
    this.isTable = false;
    this.isLog = false;
  }

  table(){
    this.isTable = true;
    this.isLista = false;
    this.isLog = false;
  }

  log(){
    this.isLog = true;
    this.isLista = false;
    this.isTable = false;
  }

}
