import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-charger-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charger-details.component.html',
  styleUrls: ['./charger-details.component.css']
})
export class ChargerDetailsComponent {

  constructor() { }

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart() {
    const data = [
      { status: 'active charges', count: 19 },
      { status: 'inactive charges', count: 2 },
      { status: 'maintanance charges', count: 3 },
    ];


    const labels = data.map(item => item.status);
    const counts = data.map(item => item.count);

    const ctx = (document.getElementById('chargerChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: counts,
            backgroundColor: [
              '#1aa979', '#ff204e', '#ffd700'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            datalabels: {
              formatter: (value:any, context:any) => {
                const total = context.chart.data.datasets[0].data.reduce((acc: number, val: number) => acc + val, 0);
                const percentage = (value / total * 100).toFixed(2) + '%'; 
                return percentage;  
              },
              color: '#fff',
              font: {
                weight: 'bold'
              }
            },
            legend: {
              labels: {
                usePointStyle: true,
                pointStyle: 'circle'
              },
              position: 'bottom',
            },
            title:{
              display:true,
              text:'charger details',
              color: '#333',
              font: {
                size: 20,
              },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem: any) => {
                  const count = tooltipItem.raw;
                  return `(${count})`;
                }
              }
            },
          }
        }
      });
    }
  }
}
