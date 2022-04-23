import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { LogComponent } from './componentes/log/log.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { TableComponent } from './componentes/table/table.component';

const routes: Routes = [
{
  path: "",
  component: ListaComponent
},  
{
  path: "lista",
  component: ListaComponent
},
{
  path: "table",
  component: TableComponent
},
{
path: "log",
  component: LogComponent
},
{
  path: "**",
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
