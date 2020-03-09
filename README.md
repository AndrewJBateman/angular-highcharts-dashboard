# Angular HighCharts Dashboard

Angular app to show a dashboard with a selecion of chart types from [Highcharts](https://www.highcharts.com/). Much of code from [code-academia](https://www.youtube.com/channel/UCHDfCPdd_Q-OOcsujHB5-yA) to be expanded upon with different chart types etc.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

### Highcharts/Angular Chart Types

* [Pie Chart:](https://www.highcharts.com/demo/pie-basic) 
* [Stacked Area](https://www.highcharts.com/demo/area-stacked)
* [Angular Material Table](https://material.angular.io/components/table/overview)

## Screenshots

![Example screenshot](./img/chart.png)
![Example screenshot](./img/pie.png)

## Technologies

* [Angular v9.0.5](https://angular.io/) latest version of JavaScript framework
* [Angular Material v9.1.1](https://material.angular.io/)
* [Angular Flex Layout v9.0.0-beta.29](https://github.com/angular/flex-layout)
* [Highcharts v8.0.3](https://www.highcharts.com/)
* [highcharts-angular v2.4.0](https://github.com/highcharts/highcharts-angular) official minimal Highcharts wrapper for Angular

## Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Code Examples

* extract from inialisation of pie chart page, showing chart options

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
        text: 'PIE EATING DATA'
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

## Features

* 

## Status & To-Do List

* Status: Working.
* To-Do: Add comments, complete readme and customise with other chart types etc. 

## Inspiration

* [code-academia: Angular 8 Admin Dashboard Panel from scratch using Angular Material, highcharts and flex-layout](https://www.youtube.com/watch?v=FP7Hs8lTy1k&t=47s)
* [Github repo: Angular Material Dasshboard using Angular Material, highcharts and flexbox](https://github.com/bloodymind/angular-material-dashboard)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
