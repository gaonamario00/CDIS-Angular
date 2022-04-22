import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service';
import { Automovil } from '../../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos!: Automovil[];

  public page = 1;
  public pageSize = 10;
  isLoading = false;

  constructor(private autosService: AutosService) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((data:any)=>{
      this.autos = data.data;
      console.log(this.autos);
      this.isLoading = true;
    });
  }

}
