import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../../models/models';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.css']
})
export class ModalDetalleComponent implements OnInit {
  @Input() auto!: Automovil;

  fecha:string = "";

  constructor(public activeModal: NgbActiveModal) {
  }
  ngOnInit(): void {
    this.fecha = Intl.DateTimeFormat("es-MX", { timeStyle: "short", dateStyle: "full"}).format(this.auto.fecha_registro);
  }
}
