import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Chart,
  ChartConfiguration,
  registerables,
} from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

   /** static Data */
  data = [
    { month: 'january', count: 0 },
    { month: 'february', count: 0 },
    { month: 'march', count: 0 },
    { month: 'april', count: 0 },
    { month: 'may', count: 0 },
    { month: 'june', count: 9 },
    { month: 'july', count: 2 },
    { month: 'august', count: 1 },
    { month: 'september', count: 0 },
  ];

  private chart: Chart | undefined;

  /**rendering chart on ngOnInit*/
  ngOnInit() {
    this.renderChart();
  }

   /**chart rendering */
  renderChart(): void {
    const ctx = document.getElementById('line') as HTMLCanvasElement;
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.data.map((item) => item.month.toString());
    const data = {
      labels: labels,
      datasets: [
        {
          label: '',
          data: this.data.map((item) => item.count),
          fill: false,
          borderColor: '#7cc6ce',
          borderWidth: 1,
          backgroundColor: '#7cc6ce',
          tension: 0.1,
          pointRadius: 3, 
          pointHoverRadius: 5,
        }
      ],
    };

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'New Station',
            align: 'start',
            color: '#333',
            font: {
              size: 10,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              font: {
                size: 16,
              },
              color: '#333',
            },
            grid: {
              display: false,
            },
            ticks: {
              color: 'black',
              font: {
                size: 10,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value:any) => value >= 1 && value <= 10 ? value : '',
              stepSize: 1, 
              color: '#333',
              font: {
                size: 10,
              },
            },
            grid: {
              display: true,
              color: 'rgba(200, 200, 200, 0.2)',
            },
          },
        },
      },
    };

    this.chart = new Chart(ctx, config);
  }

}
