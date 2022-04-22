import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from 'src/app/services/autos.service';
import { Automovil } from '../../models/models';
import { ModalAgregarModificarComponent } from '../modal-agregar-modificar/modal-agregar-modificar.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

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

  constructor(
    private autosService: AutosService, 
    private modalService: NgbModal    
    ) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((data:any)=>{
      this.autos = data.data;
      console.log(this.autos);
      this.isLoading = true;
    });
  }

  open(isAddMode:boolean, auto?:Automovil) {
    const modalRef = this.modalService.open(ModalAgregarModificarComponent);
    modalRef.componentInstance.isAddMode = isAddMode;
    modalRef.componentInstance.auto = auto;
  }

  openConfirmModal(auto:Automovil) {
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.auto = auto;
  }


}
