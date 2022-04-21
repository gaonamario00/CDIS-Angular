import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';

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
  path: "**",
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
