import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListaComponent,
    ModalDetalleComponent,
    TableComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
