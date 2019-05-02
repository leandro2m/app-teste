import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../../../services/telemetry.service';
import { watersystemBL01 } from '../../../../environments/environment';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bloco1',
  templateUrl: './bloco1.component.html',
  styleUrls: ['./bloco1.component.scss']
})
export class Bloco1Component implements OnInit {

  public volumeValue: number ;

  deviceId = watersystemBL01.deviceId;

  public alertWaterTank = '';
  public cssTankAlert = '';

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
