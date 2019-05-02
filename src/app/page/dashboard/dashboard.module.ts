import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';


// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { Cisterna1Component } from './cisterna1/cisterna1.component';
import { Cisterna2Component } from './cisterna2/cisterna2.component';
import { Bloco1Component } from './bloco1/bloco1.component';
import { Bloco2Component } from './bloco2/bloco2.component';
import { Bloco3Component } from './bloco3/bloco3.component';
import { Bloco4cl1Component } from './bloco4cl1/bloco4cl1.component';
import { Bloco4cl2Component } from './bloco4cl2/bloco4cl2.component';
import { Bloco5cl1Component } from './bloco5cl1/bloco5cl1.component';
import { Bloco6cl1Component } from './bloco6cl1/bloco6cl1.component';
import { Bloco6cl2Component } from './bloco6cl2/bloco6cl2.component';
import { Bloco5cl2Component } from './bloco5cl2/bloco5cl2.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';
import { SolarComponent } from './solar/solar.component';
// Load fusion theme

FusionChartsModule.fcRoot(FusionCharts, Widgets, Charts, FintTheme);

@NgModule({
  declarations: [
    DashboardComponent,
    Cisterna1Component,
    Cisterna2Component,
    Bloco1Component,
    Bloco2Component,
    Bloco3Component,
    Bloco4cl1Component,
    Bloco4cl2Component,
    Bloco5cl1Component,
    Bloco6cl1Component,
    Bloco6cl2Component,
    Bloco5cl2Component,
    SolarComponent,
    SensorDetailComponent],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FusionChartsModule,
    BrowserModule,
    NgxChartsModule,
    NgxEchartsModule,
    ThemeModule
  ],
  exports: [
    DashboardComponent,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DashboardModule { }
