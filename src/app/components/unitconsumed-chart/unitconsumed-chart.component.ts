import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-unitconsumed-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unitconsumed-chart.component.html',
  styleUrls: ['./unitconsumed-chart.component.css']
})
export class UnitconsumedChartComponent {


  constructor() { }

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart() {
   const  data = [
      { month: 'january', count: 0 },
      { month: 'february', count: 0 },
      { month: 'march', count: 0 },
      { month: 'april', count: 0 },
      { month: 'may', count: 0 },
      { month: 'june', count: 68 },
      { month: 'july', count: 230 },
      { month: 'august', count: 0 },
      { month: 'september', count: 0 },
    ];


    const labels = data.map(item => item.month);
    const counts = data.map(item => item.count);

    const ctx = (document.getElementById('unitpiechart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: counts,
            backgroundColor: [
              '#1aa979', '#ff204e', '#ffd700','#392467','#00c853','#f06292','#795548','#80bcbd','#1aa979'
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
