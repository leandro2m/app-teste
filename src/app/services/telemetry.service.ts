import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { environment } from './../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class TelemetryService {

  private directory = 'plugins/telemetry/DEVICE/';

  constructor(
    private apiClientService: ApiClientService
  ) { }

  getDeviceLastData(deviceId, keys) {

    let keysList = '';
    // tslint:disable-next-line:forin
    for (const i in keys) {
      const key = keys[i];
      keysList += key;
      // tslint:disable-next-line:radix
      if (parseInt(i) < keys.length - 1) {
        keysList += ',';
      }
    }
    const url = this.directory + deviceId + '/values/timeseries?keys=' + keysList;
    // tslint:disable-next-line:max-line-length
    // http://thingsboard.futuroallu.com:8080/api/plugins/telemetry/DEVICE/99b35bf0-6548-11e9-877b-c595be1938c2/values/timeseries?keys=waterlevel
    return this.apiClientService.get(url);
  }

  getDeviceTimeSeries(deviceId, keys, startDate, endDate, interval) {

    const startUnix = startDate;
    const endUnix = endDate;
    // tslint:disable-next-line:radix
    const intervalUnix = parseInt(interval);

    let keysList = '';
    // tslint:disable-next-line:forin
    for (const i in keys) {
      const key = keys[i];
      keysList += key;
      // tslint:disable-next-line:radix
      if (parseInt(i) < keys.length - 1) {
        keysList += ',';
      }
    }


    // tslint:disable-next-line:max-line-length
    const url = 'plugins/' + 'telemetry' + '/DEVICE/' + deviceId + '/values/timeseries?keys=' + keysList + '&startTs=' + startUnix + '&endTs=' + endUnix + '&interval=' + intervalUnix + '&limit=10000&agg=NONE';

    return this.apiClientService.get(url);
  }

  getDeviceInfos(deviceId) {
    const url = 'device/' + deviceId;
    return this.apiClientService.get(url);
  }


}
