import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../../models/data';
import { Automovil } from '../../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos!: Automovil[];

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
