import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-fxf-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './fxf-dashboard.component.html',
  styleUrl: './fxf-dashboard.component.scss',
})
export class FxfDashboardComponent implements OnInit {
  public data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  public settings: any = {
    type: 'bar',
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    data: {
      labels: this.data.map((row) => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: this.data.map((row) => row.count),
        },
      ],
    },
  };
  chart: any;
  ngOnInit(): void {
    this.chart = new Chart('acquisitions', this.settings);
  }
}
