import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Transaction } from '../../interfaces/transactions';
import { LocalStore } from '../../services/localStore.service';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-fxf-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './fxf-dashboard.component.html',
  styleUrl: './fxf-dashboard.component.scss',
})
export class FxfDashboardComponent implements OnInit {
  constructor(
    private service: TransactionsService,
    private localStore: LocalStore
  ) {}

  dataIncome: Transaction[] = [];
  theme: string = '';

  public settings: any = {};
  chart: any;
  ngOnInit(): void {
    this.service.GetAllIncome().subscribe({
      next: (data) => {
        this.dataIncome = data;

        //#region Grafico
        // Raggruppa e somma per categoria
        const grouped = this.dataIncome.reduce((acc, row) => {
          if (!acc[row.category]) {
            acc[row.category] = 0;
          }
          acc[row.category] += row.amount;
          return acc;
        }, {} as Record<string, number>);

        const labels = Object.keys(grouped);
        const values = Object.values(grouped);

        this.settings = {
          type: 'bar',
          options: {
            animation: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
              datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'black',
                font: {
                  weight: 'bold',
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    weight: 'bold',
                    size: 14,
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    weight: 'bold',
                    size: 14,
                  },
                },
              },
            },
          },
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Income by category',
                data: values,
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
              },
            ],
          },
        };
        this.chart = new Chart('acquisitions', this.settings);
      },
      error: (err) => console.error('Errore:', err),
    });

    this.localStore.theme$.subscribe((theme) => {
      if (!this.chart) return;
      const isDark = theme === 'dark';

      // this.chart.options.plugins!.legend!.labels!.color = isDark ? 'white' : undefined;
      // this.chart.options.plugins!.tooltip!.titleColor = isDark ? 'white' : undefined;
      // this.chart.options.plugins!.tooltip!.bodyColor = isDark ? 'white' : undefined;
      // this.chart.options.plugins!.tooltip!.backgroundColor = isDark ? '#333' : undefined;

      this.chart.options.scales!['x']!.ticks!.color = isDark
        ? '#cfcfcf'
        : undefined;
      this.chart.options.scales!['y']!.ticks!.color = isDark
        ? '#cfcfcf'
        : undefined;
      this.chart.options.scales!['x']!.grid!.color = isDark
        ? '#7c7d83'
        : '#cfcfcf';
      this.chart.options.scales!['y']!.grid!.color = isDark
        ? '#7c7d83'
        : '#cfcfcf';

      this.chart.update();
    });
    //#endregion
  }
}
