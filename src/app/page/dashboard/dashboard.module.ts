import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { WaterComponent } from './water/water.component';
import { DashboardComponent } from './dashboard.component';
import { FusionChartsModule } from 'angular4-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { Ete1Component } from './ete1/ete1.component';
import { Ete2Component } from './ete2/ete2.component';
import { Ete3Component } from './ete3/ete3.component';

// Load fusion theme

FusionChartsModule.fcRoot(FusionCharts, Widgets, Charts, FintTheme);

@NgModule({
  declarations: [
    WaterComponent,
    DashboardComponent,
    Ete1Component,
    Ete2Component,
    Ete3Component],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FusionChartsModule,
    BrowserModule
  ],
  exports: [
    DashboardComponent,
    WaterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DashboardModule { }
