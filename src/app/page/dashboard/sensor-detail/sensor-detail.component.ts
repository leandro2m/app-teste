import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelemetryService } from 'src/app/services/telemetry.service';
import * as moment from 'moment';
import { TelemetryUtil } from '../../../services/util/telemetry-util';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';





@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.scss']
})
export class SensorDetailComponent implements OnInit {

  public id: string;
  waterlevel: number;
  sysTemp: number;
  sysHumi: number;
  deviceName: string;
  internetstatus: boolean;
  volumeChart = [];
  internetChart = [];
  countWaterlevel = [];
  endDate = new Date();
  startDate = moment(this.endDate).subtract(7, 'days').toDate().getTime();
  marks = 345600000;
  options: any = {};
  chartInternetOptions: any = {};
  chartWaterlevelOptions: any = {};
  internetResilience = 0.0;
  reservMsg = '';
  reservMsgCss = '';
  types = ['Diario', 'Semanal', 'Mensal'];
  // tslint:disable-next-line:variable-name
  selected_period = 'Semanal';

  @Output() public change: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private telemetryService: TelemetryService,
              ) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      console.log('this.id', this.id);
      if (!this.id) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.initPage();
        this.getDeviceInfos();
        this.updateChartWaterLevel(this.startDate, this.marks);
        this.updateChartInternet(this.startDate, this.marks);
        this.updateChartCountWaterLevelPieChart(this.startDate, this.marks);
      }
    });
  }

  initPage() {

    this.telemetryService
    .getDeviceLastData(this.id, ['waterlevel,syshumi,systemp,internetstatus']).then(response => {

      const volume = response['waterlevel'];
      const temp = response['systemp'];
      // tslint:disable-next-line:radix
      const humi = response['syshumi'];
      const internet = response['internetstatus'];

      this.waterlevel = volume[0].value;
      // tslint:disable-next-line:radix
      this.sysHumi = parseInt(humi[0].value);
      this.sysTemp = temp[0].value;
      this.internetstatus = internet[0].value;
      // tslint:disable-next-line:radix
    

      if (this.waterlevel > 100) {
        this.reservMsg = 'Sensor no nível de transbordo';
        this.reservMsgCss = 'badge-danger';
      } else if (this.waterlevel <= 100 && this.waterlevel >= 50) {
        this.reservMsg = 'Sensor no nível cheio';
        this.reservMsgCss = 'badge-success';
      } else if (this.waterlevel <= 49 && this.waterlevel <= 20) {
        this.reservMsg = 'Sensor no nível baixo';
        this.reservMsgCss = 'badge-warning';
      } else if (this.waterlevel <= 19) {
        this.reservMsg = 'Sensor no nível vazio';
        this.reservMsgCss = 'badge-danger';
      }
  });
  }
  getDeviceInfos() {
    this.telemetryService.getDeviceInfos(this.id).then(response => {
      this.deviceName = response['additionalInfo'].description;
      console.log('DeviceInfos', response);
      console.log ( 'Device name', this.deviceName);
    });
  }
  updateChartWaterLevel(startdate, marks) {

    const startTimeStamp = startdate;
    const endTimeStamp = moment(this.endDate).toDate().getTime();
    const interval = marks;


    this.telemetryService.getDeviceTimeSeries(this.id, ['waterlevel'],
      startTimeStamp, endTimeStamp, interval).then(response => {

      this.volumeChart = TelemetryUtil.formatToChart(response['waterlevel']);


      // chart options VolumeChart

      this.options = {
        backgroundColor: 'rgb(49, 45, 112)',
        color: ['rgb(51, 159, 255)'],
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'rgb(61, 55, 128)',
            },
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            show: true,
            type: 'category',
            boundaryGap: false,
            data: this.volumeChart[1],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 255)',
              },
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(255, 255, 255, 255)',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 255)',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 255)',
              },
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(255, 255, 255, 255)',
              },
            },
          },
        ],
        series: [
          {
            name: 'Reservatorio',
            type: 'line',
            stack: 'Total amount',
            areaStyle: {normal: {} },
            data: this.volumeChart[0],
          },

        ],
      };
      });


  }

  formatChartValue(value) {
    return `${value.toLocaleString()}` + ' %';
  }

  formatChartDateTimeValue(value) {
    const dateObj = new Date(value);
    return moment(dateObj).format('DD/MM/YYYY HH:mm');
  }

  updateChartInternet(startdate, marks) {

    const startTimeStamp = startdate;
    const endTimeStamp = moment(this.endDate).toDate().getTime();
    const interval = marks;


    this.telemetryService.getDeviceTimeSeries(this.id, ['internetstatus'],
      startTimeStamp, endTimeStamp, interval).then(response => {

      // this.internetChart = TelemetryUtil.countInternetChart(response['internetstatus']);
      this.internetChart = TelemetryUtil.countInternetChart(response['internetstatus']);


      this.internetResilience = this.internetChart[1] / this.internetChart[0].length;

      this.chartInternetOptions = {
        backgroundColor: 'rgb(49, 45, 112)',
        color: ['rgb(51, 224, 146)', 'rgb(255, 61, 116)'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {d}%',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Online', 'Offline'],
          textStyle: {
            color: 'rgba(255, 255, 255, 255)',
          },
        },
        series: [
          {
            name: 'Conectividade',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: this.internetChart[2], name: 'Online' },
              { value: this.internetChart[1], name: 'Offline' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 255)',
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 255)',
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            },
          },
        ],
      };
    });
  }

  updateChartCountWaterLevelPieChart(startdate, marks) {

    const startTimeStamp = startdate;
    const endTimeStamp = moment(this.endDate).toDate().getTime();
    const interval = marks;

    this.telemetryService.getDeviceTimeSeries(this.id, ['waterlevel'],
      startTimeStamp, endTimeStamp, interval).then(response => {

      // pie chart
      this.countWaterlevel = TelemetryUtil.countWaterlevelChart(response['waterlevel']);


      this.chartWaterlevelOptions = {
        backgroundColor: 'rgb(49, 45, 112)',
        color: ['rgb(51, 224, 146)', 'rgb(255, 61, 116)', 'rgb(255, 196, 56)'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {d}%',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Cheio', 'Baixo', 'Transbordo'],
          textStyle: {
            color: 'rgba(255, 255, 255, 255)',
          },
        },
        series: [
          {
            name: 'Volume',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              // tslint:disable-next-line:radix
              { value: this.countWaterlevel[2] , name: 'Cheio' },
              { value: this.countWaterlevel[3] , name: 'Baixo' },
              { value: this.countWaterlevel[1] , name: 'Transbordo' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 255)',
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 255)',
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(0, 0, 0, 0)',
                },
              },
            },
          },
        ],
      };

      });



  }
  onChangePeriod(start) {

    const newPeriod = start;
    // tslint:disable-next-line:no-unused-expression
    let newStartDate: number;
    let newMark: number;

    if (newPeriod === 'Diario') {
      newStartDate = moment(this.endDate).subtract(1, 'days').toDate().getTime();
      newMark = 86400000;
      this.selected_period = 'Diario';

      this.updateChartWaterLevel(newStartDate, newMark);
      this.updateChartInternet(newStartDate, newMark);
      this.updateChartCountWaterLevelPieChart(newStartDate, newMark);


    } else if (newPeriod === 'Semanal') {
      newStartDate = moment(this.endDate).subtract(7, 'days').toDate().getTime();
      newMark = 345600000; // 4 hours interval
      this.selected_period = 'Semanal';
      this.updateChartWaterLevel(newStartDate, newMark);
      this.updateChartInternet(newStartDate, newMark);
      this.updateChartCountWaterLevelPieChart(newStartDate, newMark);

    } else if (newPeriod === 'Mensal') {
      newStartDate = moment(this.endDate).subtract(30, 'days').toDate().getTime();
      newMark = 691200000; // 8 hours interval
      this.selected_period = 'Mensal';
      this.updateChartWaterLevel(newStartDate, newMark);
      this.updateChartInternet(newStartDate, newMark);
      this.updateChartCountWaterLevelPieChart(newStartDate, newMark);

    }

  }



}
