import * as moment from 'moment';
export class TelemetryUtil {
    public static formatToChart(dataList: Array<any>) {
        const chartData = [];
        const chartTs = [];
        // tslint:disable-next-line:forin
        for (const i in dataList) {
            const dataValue = dataList[i];
            chartData[i] = parseFloat(dataValue.value).toFixed(2);
            // tslint:disable-next-line:radix
            chartTs[i] = moment(dataValue.ts).format('DD/MM/YYYY HH:MM');
        }
        return [chartData, chartTs];
    }

    public static countInternetChart(dataList: Array<any>) {
        const chartInternet = [];
        let countOffline = 0;
        let countOnline = 0;

        // tslint:disable-next-line:forin
        for (const i in dataList) {
            const dataValue = dataList[i];
            chartInternet[i] = dataValue.value;
            if (dataValue.value === 'false') {
                countOnline = countOnline + 1;
            } else if (dataValue.value === 'true') {
                countOffline = countOffline + 1;
            }
        }
        return [chartInternet, countOffline, countOnline];
    }
    public static countWaterlevelChart(dataList: Array<any>) {
        const chartWaterlevel = [];
        let countTransbordo = 0;
        let countCheio = 0;
        let countBaixo = 0;

        // tslint:disable-next-line:forin
        for (const i in dataList) {
            const dataValue = dataList[i];
            chartWaterlevel[i] = dataValue.value;
            if (dataValue.value >= 110) {
                countTransbordo = countTransbordo + 1;
            } else if (dataValue.value <= 100 && dataValue.value >= 50) {
                countCheio = countCheio + 1;
            } else if (dataValue.value <= 45 && dataValue.value >= 0) {
                countBaixo = countBaixo + 1;
            }
        }
        return [chartWaterlevel, countTransbordo, countCheio, countBaixo];
    }


    public static formatToChartInteger(dataList: Array<any>) {
        const chartData = [];
        // tslint:disable-next-line:forin
        for (const i in dataList) {
            const dataValue = dataList[i];
            chartData.push({
                // tslint:disable-next-line:radix
                value: parseInt(dataValue.value).toString(),
                // tslint:disable-next-line:radix
                name: new Date(parseInt(dataValue.ts)).toString()
            });
        }
        return chartData;
    }
    // function to sum all values coming from TB's API where interval is one day
    public static sumGaugeKwh(dataList: Array<any>) {
        let chartData1 = 0.00;
        // tslint:disable-next-line:forin
        for (const i in dataList) {
            const dataValue = dataList[i];
            // tslint:disable-next-line:radix
            chartData1 = parseInt(dataValue.value) + chartData1;
        }
        return chartData1;
    }
}
