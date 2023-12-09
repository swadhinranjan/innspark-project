import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoarRoutingModule } from './soar-routing.module';
import { SoarComponent } from './soar/soar.component';


@NgModule({
  declarations: [
    SoarComponent
  ],
  imports: [
    CommonModule,
    SoarRoutingModule
  ]
})
export class SoarModule { }
