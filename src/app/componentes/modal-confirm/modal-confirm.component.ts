import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models/models';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() auto!: Automovil;

  constructor(
    public activeModal: NgbActiveModal,
    private autosService: AutosService
    ) { }

  ngOnInit(): void {
  }

  eliminar(auto: Automovil){
    this.autosService.deleteAuto(auto).subscribe((res)=>{
      alert("Registro eliminado con exito!");
      this.activeModal.close();
    });
  }

}
