import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models/models';

@Component({
  selector: 'app-modal-agregar-modificar',
  templateUrl: './modal-agregar-modificar.component.html',
  styleUrls: ['./modal-agregar-modificar.component.css']
})
export class ModalAgregarModificarComponent implements OnInit {

  @Input() isAddMode!: boolean;
  @Input() auto?: Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

}
