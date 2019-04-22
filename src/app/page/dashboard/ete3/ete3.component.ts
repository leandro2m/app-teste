import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ete3',
  templateUrl: './ete3.component.html',
  styleUrls: ['./ete3.component.scss']
})
export class Ete3Component implements OnInit {

  public volumeValue = 50;
  // tslint:disable-next-line:ban-types
  public gaugeData: Object;
  // tslint:disable-next-line:ban-types
  data: Object;

  constructor() {

    this.data = {
      'chart': {
        "theme": "fusion",
        'subcaptionFontBold': '0',
        'lowerLimit': '0',
        'upperLimit': '100',
        'numberSuffix': '',
        'showValue': '0',
        'cylFillColor': '#008ee4',
        'borderAlpha': '0',
        'showTickMarks': '2',
        'showTickValues': '2',
        "bgColor":"#494299",
        "bgratio": "0",
        "bgalpha": "100,0",
        "showBorder": "0",
        "baseFontColor": "#ffffff",
        "showToolTip": "0",

        // 'lowerLimitDisplay': 'Vazio',
        // 'upperLimitDisplay': 'Cheio'
      },
      'value': this.volumeValue
    };

  }

  ngOnInit() {
  }

}
