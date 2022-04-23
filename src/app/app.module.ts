import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { VistasComponent } from './componentes/vistas/vistas.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { ModalDetalleComponent } from './componentes/modal-detalle/modal-detalle.component';
import { TableComponent } from './componentes/table/table.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ModalAgregarModificarComponent } from './componentes/modal-agregar-modificar/modal-agregar-modificar.component';
import { FormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './componentes/modal-confirm/modal-confirm.component';
import { ModelsInputDirective } from './directives/models-input.directive';
import { FormatoModeloPipe } from './pipes/formato-modelo.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogComponent } from './componentes/log/log.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListaComponent,
    ModalDetalleComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalAgregarModificarComponent,
    ModalConfirmComponent,
    ModelsInputDirective,
    FormatoModeloPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      countDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
