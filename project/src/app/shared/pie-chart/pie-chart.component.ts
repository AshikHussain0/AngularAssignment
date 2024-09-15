import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartDto } from '../shared.model';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import ExportingPDF from 'highcharts/modules/offline-exporting';  // For PDF


Exporting(Highcharts);
ExportData(Highcharts);
ExportingPDF(Highcharts);

interface CustomPointOptions extends Highcharts.Point {
  contribution?: number;
  intensity?: number;
  absolute?: number;
}



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() title!: string;
  @Input() color!: string[];
  @Input() chartData!: ChartDto;
  @Input() showExport!: boolean;


  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngAfterViewInit() {
    this.renderChart();
  }


  renderChart() {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'pie',
        backgroundColor: '#2A2B35',
        borderRadius: 10,
        width: 550,
        height: 400,
        custom: {},
        events: {
        },
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      title: {
        text: this.title,
        align: 'left',
        padding: 20,
        style: {
          textAlign: 'start',
          color: 'white',
          fontSize: '12px',
          fontWeight: '800',
        },
      },
      subtitle: {
        text: 'tCO2e/t',
        align: 'left',
        style: {
          textAlign: 'start',
          color: '#afb3ba',
          fontSize: '10px',
        },
      },
      tooltip: {
        pointFormat: `
    Contribution: <span style="font-weight: 900">{point.contribution: .2f}</span><br>
    Intensity: <span style="font-weight: 900">{point.intensity}</span><br>
    Absolute: <span style="font-weight: 900">{point.absolute: .2f}</span>
  `,
      },
      legend: this.showExport
        ? {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal',
          floating: true,
          y: 20,
          itemStyle: {
            color: '#afb3ba',
            fontSize: '10px',
          },
          itemHoverStyle: {
            color: 'green',
          },
        }
        : {
          align: 'right',
          verticalAlign: 'bottom',
          layout: 'horizontal',
          floating: true,
          itemStyle: {
            color: '#afb3ba',
            fontSize: '10px',
          },
          itemHoverStyle: {
            color: 'green',
          },
        },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: this.showExport,
        buttons: {
          contextButton: {
            symbolStroke: '#afb3ba',
            symbolFill: '#ffffff',
            theme: {
              fill: '#2A2B35',
              style: {
                color: '#afb3ba',
              }
            },
            states: {
              hover: {
                symbolStroke: '#2A2B35',
                theme: {
                  fill: '#2A2B35'
                }
              }
            },

            menuItems: [
              'viewFullscreen',
              'downloadPDF',
            ],
          },
        },
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#2A2B35',
          dataLabels: [
            {
              enabled: false,
            },
            {
              enabled: true,
              distance: -25,
              format: '{point.percentage:.0f}%',
              style: {
                fontSize: '0.9em',
                border: 'none',
                textOutline: 'none',
              },
            },
          ],
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Registrations',
          innerSize: '60%',
          size: '80%',
          data: [
            {
              name: 'Scope 1',
              y: this.chartData.absoluteChartData[0].percentageValue,
              color: this.color[0],
              contribution: this.chartData.absoluteChartData[0].percentageValue,
              intensity: this.chartData.intensityChartData[0].value,
              absolute: this.chartData.absoluteChartData[0].value,
            } as CustomPointOptions,
            {
              name: 'Scope 2',
              y: this.chartData.absoluteChartData[1].percentageValue,
              color: this.color[1],
              contribution: this.chartData.absoluteChartData[1].percentageValue,
              intensity: this.chartData.intensityChartData[1].value,
              absolute: this.chartData.absoluteChartData[1].value,
            } as CustomPointOptions,
            {
              name: 'Scope 3',
              y: this.chartData.absoluteChartData[2].percentageValue,
              color: this.color[2],
              contribution: this.chartData.absoluteChartData[2].percentageValue,
              intensity: this.chartData.intensityChartData[2].value,
              absolute: this.chartData.absoluteChartData[2].value,
            } as CustomPointOptions,
          ],
        },
      ],
    } as Highcharts.Options);
  }



}
