import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  isLista: boolean = true;
  isTable:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  lista(){
    this.isLista = true;
    this.isTable = false;
  }

  table(){
    this.isLista = false;
    this.isTable = true;
  }

}
