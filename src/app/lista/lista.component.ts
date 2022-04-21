import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from '../data';
import { ModalDetalleComponent } from '../modal-detalle/modal-detalle.component';
import { Automovil } from '../models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  autos: Automovil[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  open(auto:Automovil) {
    const modalRef = this.modalService.open(ModalDetalleComponent);
    modalRef.componentInstance.auto = auto;
  }

}
