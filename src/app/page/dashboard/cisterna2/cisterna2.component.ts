import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../../../services/telemetry.service';
import { watersystemCistern02 } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cisterna2',
  templateUrl: './cisterna2.component.html',
  styleUrls: ['./cisterna2.component.scss']
})
export class Cisterna2Component implements OnInit {

  public volumeValue: number ;

  deviceId = watersystemCistern02.deviceId;
  public alertWaterTank = '';
  public cssTankAlert = '';
  // tslint:disable-next-line:ban-types
  // tslint:disable-next-line:ban-types
  data: Object;

  constructor(
    private telemetryService: TelemetryService,
    private router: Router
    ) {

  }

  ngOnInit() {
    this.getLastTelemetry();
  }

  getLastTelemetry() {
    this.telemetryService
    .getDeviceLastData(this.deviceId, ['waterlevel']).then(response => {

      const volume = response['waterlevel'];
      this.volumeValue = volume[0].value;


      this.data = {
        'chart': {
          "theme": "fusion",
          'subcaptionFontBold': '0',
          'lowerLimit': '0',
          'upperLimit': '110',
          'numberSuffix': '',
          'showValue': '0',
          'cylFillColor': '#008ee4',
          'borderAlpha': '0',
          'showTickMarks': '0',
          'showTickValues': '0',
          "bgColor":"#494299",
          "bgratio": "0",
          "bgalpha": "100,0",
          "showBorder": "0",
          "baseFontColor": "#ffffff",
          "showToolTip": "0",
          'lowerLimitDisplay': 'Vazio',
          'upperLimitDisplay': 'Cheio'
        },
        'value': this.volumeValue
      };

      if (this.volumeValue > 100 ) {
        this.alertWaterTank = 'Transbordo';
        this.cssTankAlert = 'badge badge-danger';
      } else if (this.volumeValue < 34) {
        this.alertWaterTank = 'Baixo';
        this.cssTankAlert = 'badge badge-warning';
      }
    });

  }
  goToDeviceDetail() {
    this.router.navigateByUrl('sensor/' + this.deviceId);
  }
}
