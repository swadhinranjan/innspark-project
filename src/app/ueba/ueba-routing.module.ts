import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UebaComponent } from './ueba/ueba.component';

const routes: Routes = [
  { path: 'ueba', component: UebaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UebaRoutingModule { }
