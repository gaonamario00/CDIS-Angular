import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  autos: Automovil[] = [];

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
