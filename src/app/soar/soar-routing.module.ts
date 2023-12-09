import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoarComponent } from './soar/soar.component';

const routes: Routes = [
  { path: 'soar', component: SoarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoarRoutingModule { }
