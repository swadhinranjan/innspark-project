import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UebaRoutingModule } from './ueba-routing.module';
import { UebaComponent } from './ueba/ueba.component';


@NgModule({
  declarations: [
  
    UebaComponent
  ],
  imports: [
    CommonModule,
    UebaRoutingModule
  ]
})
export class UebaModule { }
