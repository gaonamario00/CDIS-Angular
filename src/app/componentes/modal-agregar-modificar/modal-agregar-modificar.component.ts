import { AUTO_STYLE } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models/models';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-modal-agregar-modificar',
  templateUrl: './modal-agregar-modificar.component.html',
  styleUrls: ['./modal-agregar-modificar.component.css'],
})
export class ModalAgregarModificarComponent implements OnInit {
  @Input() isAddMode = true;
  @Input() auto!: Automovil;

  modelosStr = '';
  modeloStrAux = "";
  modelos: number[] = [];
  isModelsCorrect: boolean = true;

  constructor(
    public activeModal: NgbActiveModal,
    private autosService: AutosService
  ) {}

  ngOnInit(): void {
    if (!this.isAddMode) {
      this.auto.modelos.forEach((e) => {
        if (e != undefined) {
          this.modelosStr += e + ',';
        }
      });
      this.modelosStr = this.modelosStr.slice(0, this.modelosStr.length - 1);
      this.modeloStrAux = this.modelosStr;
    } else {
      const AUTO: Automovil = {
        modelos: [],
        descripcion: '',
        descripcioncorta: '',
        marca: '',
        submarca: '',
        Ocupantes: '',
      };
      this.auto = AUTO;
    }
  }

  actualizarAuto(auto: Automovil) {
    this.arrySplit(this.modelosStr);
    if(!this.isModelsCorrect) {
      alert('Llene correctamente todos los campos!');
      this.modelosStr = "";
      return;
    };
    this.autosService.updateAutos(auto).subscribe((res: any) => {
      alert('Registro actualizado con exito!');
      this.activeModal.close();
    });
    this.modelosStr = "";
  }

  agregarAuto(){

  }

  arrySplit(str: string) {
    const a = str.split(',');
    a.forEach((e) => {
      let num = parseInt(e);
      if(num < 2000 || num > 2022){
        this.isModelsCorrect = false;
        return;
      }
      this.modelos.push(num);
    });
    console.log(this.modelos);
    this.auto.modelos = this.modelos;
  }

  isMode(){
    if(this.isAddMode) this.agregarAuto();
    else this.actualizarAuto(this.auto);
  }
}
