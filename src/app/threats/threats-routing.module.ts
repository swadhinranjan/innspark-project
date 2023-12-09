import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreatsComponent } from './threats/threats.component';

const routes: Routes = [
  { path: 'threats', component: ThreatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreatsRoutingModule { }
