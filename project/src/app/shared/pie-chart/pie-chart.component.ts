import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartDto } from '../shared.model';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import ExportingPDF from 'highcharts/modules/offline-exporting';  // For PDF

// Initialize the exporting modules
Exporting(Highcharts);
ExportData(Highcharts);
ExportingPDF(Highcharts);

interface CustomPointOptions extends Highcharts.Point {
  contribution?: number; // Custom property
  intensity?: number; // Custom property
  absolute?: number; // Custom property
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
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>',
      },
      legend: this.showExport
        ? {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal',
          floating: true, // Allow the legend to float over the chart
          y: 20, // Adjust y-position based on your layout
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
          floating: true, // Allow the legend to float over the chartS
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
            symbol: 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><circle cx="10" cy="4" r="2" fill="white"/><circle cx="10" cy="10" r="2" fill="white"/><circle cx="10" cy="16" r="2" fill="white"/></svg>)',
            symbolSize: 18,
            className: 'transparent-context-button',
            theme: {
              fill: 'none',
            },
            states: {
              hover: {
                enabled: false, // Disable hover effects
              },
              select: {
                enabled: false, // Disable select effects
              },
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
              enabled: false, // Disable data labels for pie slices
            },
            {
              enabled: true,
              distance: -20,
              format: '{point.percentage:.0f}%', // Only keep percentage labels
              style: {
                fontSize: '0.9em',
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
              name: 'Scope 1', // Change to just the scope number if needed
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
