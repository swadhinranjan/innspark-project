import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MonitorModule } from './monitor/monitor.module';
import { ReportsModule } from './reports/reports.module';
import { SearchModule } from './search/search.module';
import { ServicesModule } from './services/services.module';
import { SoarModule } from './soar/soar.module';
import { ThreatsModule } from './threats/threats.module';
import { UebaModule } from './ueba/ueba.module';
import { AdministrationModule } from './administration/administration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MonitorModule,
    ReportsModule,
    SearchModule,
    ServicesModule,
    SoarModule,
    ThreatsModule,
    UebaModule,
    AdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
