import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetalleComponent } from '../modal-detalle/modal-detalle.component';
import { Automovil } from '../../models//models';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  page=1;
  pageSize=10;
  autos: Automovil[] = [];
  isLoading = false;

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((data:any)=>{
      this.autos = data.data;
      this.isLoading = true;
    });
  }

  open(auto:Automovil) {
    const modalRef = this.modalService.open(ModalDetalleComponent);
    modalRef.componentInstance.auto = auto;
  }

}
