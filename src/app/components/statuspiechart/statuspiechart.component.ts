import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statuspiechart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statuspiechart.component.html',
  styleUrls: ['./statuspiechart.component.css']
})
export class StatuspiechartComponent {


  constructor() { }


   /**rendering chart on ngOnInit*/
  ngOnInit(): void {
    this.createPieChart();
  }

  /**chart rendering */
  createPieChart() {

    /** static Data */
    const data = [
      { status: 'active station', count: 8 },
      { status: 'inactive station', count: 2 },
      { status: 'maintanance station', count: 2 },
    ];

    const labels = data.map(item => item.status);
    const counts = data.map(item => item.count);

    const ctx = (document.getElementById('myPieChart') as HTMLCanvasElement).getContext('2d');
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
