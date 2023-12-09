import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreatsRoutingModule } from './threats-routing.module';
import { ThreatsComponent } from './threats/threats.component';


@NgModule({
  declarations: [
    ThreatsComponent
  ],
  imports: [
    CommonModule,
    ThreatsRoutingModule
  ]
})
export class ThreatsModule { }
