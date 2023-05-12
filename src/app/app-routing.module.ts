import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';

const routes: Routes = [
  {
    path: '',
    component: KendoGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
