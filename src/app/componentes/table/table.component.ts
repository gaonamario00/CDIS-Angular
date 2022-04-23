import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AutosService } from 'src/app/services/autos.service';
import { Automovil } from '../../models/models';
import { ModalAgregarModificarComponent } from '../modal-agregar-modificar/modal-agregar-modificar.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  autos: any[] = [];

  public page = 1;
  public pageSize = 10;
  isLoading = false;

  searchText: string = "";

  constructor(
    private autosService: AutosService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((data: any) => {
      this.autos = data.data;
      this.isLoading = true;
    });
  }

  open(isAddMode: boolean, auto?: Automovil) {
    const modalRef = this.modalService.open(ModalAgregarModificarComponent);
    modalRef.componentInstance.isAddMode = isAddMode;
    modalRef.componentInstance.auto = auto;

    modalRef.result.then(
      (auto) => {
        if (isAddMode) {
          if(auto == 'Close click') return;
          this.autosService.addAutos(auto).subscribe((res) => {
            this.toastr.success('Auto agregado!');
            this.ngOnInit();
          });
        } else {
          if(auto == 'Close click') return;
          this.autosService.updateAutos(auto).subscribe((res: any) => {
            this.toastr.info('Auto actualizado!');
            this.ngOnInit();
          });
        }
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  openConfirmModal(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.auto = auto;

    modalRef.result.then(
      (autoTemp) => {
        if(autoTemp == 'Close click') return;
        this.autosService.deleteAuto(autoTemp).subscribe((res) => {
          this.toastr.error('Auto eliminado');
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
