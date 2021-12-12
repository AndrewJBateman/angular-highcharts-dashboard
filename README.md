# :zap: Angular HighCharts Dashboard

* Angular app to show a dashboard with a selecion of chart types from [Highcharts](https://www.highcharts.com/).
* Much of code from [code-academia](https://www.youtube.com/channel/UCHDfCPdd_Q-OOcsujHB5-yA) to be expanded upon with different chart types etc.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-highcharts-dashboard?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-highcharts-dashboard?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-highcharts-dashboard?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-highcharts-dashboard?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular HighCharts Dashboard](#zap-angular-highcharts-dashboard)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info - Highcharts/Angular Chart Types](#books-general-info---highchartsangular-chart-types)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info - Highcharts/Angular Chart Types

* [Pie Chart](https://www.highcharts.com/demo/pie-basic)
* [Stacked Area](https://www.highcharts.com/demo/area-stacked)
* [Angular Material Table](https://material.angular.io/components/table/overview)

## :camera: Screenshots

![Example screenshot](./img/chart.png)
![Example screenshot](./img/pie.png)

## :signal_strength: Technologies

* [Angular v13](https://angular.io/) JavaScript framework
* [Angular Material v13](https://material.angular.io/)
* [Angular Flex Layout v13](https://github.com/angular/flex-layout)
* [Highcharts v9](https://www.highcharts.com/)
* [highcharts-angular v3](https://github.com/highcharts/highcharts-angular) official minimal Highcharts wrapper for Angular

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run build` to build the project. The build artifacts will be stored in the `docs` directory.

## :computer: Code Examples

* extract from initialisation of pie chart page, showing chart options

```typescript
ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'BROWSERS: MARKET SHARE'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
    };
}
```

## :cool: Features

* Colourful chart types

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Add chart types etc.

## :clap: Inspiration

* [code-academia: Angular 8 Admin Dashboard Panel from scratch using Angular Material, highcharts and flex-layout](https://www.youtube.com/watch?v=FP7Hs8lTy1k&t=47s)
* [Github repo: Angular Material Dashboard using Angular Material, highcharts and flexbox](https://github.com/bloodymind/angular-material-dashboard)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
