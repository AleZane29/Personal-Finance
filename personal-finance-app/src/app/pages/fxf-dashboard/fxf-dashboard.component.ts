import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
//import ChartDataLabels from 'chartjs-plugin-datalabels';
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
    private transService: TransactionsService,
    private localStore: LocalStore
  ) {}

  dataIncome: Transaction[] = [];
  theme: string = '';

  public settings: any = {};
  chart: any;
  //chart2: any;

  ngOnInit(): void {
    this.transService.GetAllIncome().subscribe({
      next: (data) => {
        this.dataIncome = data;
        let incomeAmountsSC: number[] = [];
        this.dataIncome.forEach((a) => incomeAmountsSC.push(a.amount));
        this.transService.convert('EUR', this.dataIncome).then((value) => {
          for (let i = 0; i < value.length; i++) {
            this.dataIncome[i].amount = value[i];
          }
          // console.log(data);
          // console.log(this.dataIncome);

          //#region Grafico Inc/Cat
          // Raggruppa e somma per categoria
          const grouped = this.dataIncome.reduce((acc, row) => {
            if (!acc[row.category]) {
              acc[row.category] = 0;
            }
            console.log(row.amount);
            acc[row.category] += row.amount;
            return acc;
          }, {} as Record<string, number>);

          const labels = Object.keys(grouped);
          const values = Object.values(grouped);
          this.incomeCategoryChart(labels, values);
        });
      },
      error: (err) => console.error('Errore:', err),
      //#endregion
    });
    //#region Temi grafici
    //#region Grafico Inc/Time

    // let settings2 ={
    //   data: {
    //         labels: labels,
    //         datasets: [
    //           {
    //             label: 'Income by category',
    //             data: values,
    //             borderWidth: 2,
    //             borderRadius: 5,
    //             borderSkipped: false,
    //           },
    //         ],
    //       },
    // }
  }

  incomeCategoryChart(labels: string[], values: number[]) {
    this.settings = {
      type: 'bar',
      options: {
        animation: true,
        plugins: {
          title: {
            display: true,
            text: 'Income by category',
            font: {
              size: 18,
              weight: 'bold',
            },
          },
          subtitle: {
            display: true,
            text: '(Currency: €)',
            font: {
              size: 14,
              style: 'italic',
            },
            padding: {
              top: 0,
              bottom: 10,
            },
          },
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
            data: values,
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
        ],
      },
    };
    this.chart = new Chart('income_category', this.settings);

    this.localStore.theme$.subscribe((theme) => {
      if (!this.chart) return;
      const isDark = theme === 'dark';

      this.chart.options.scales!['x']!.ticks!.color = isDark
        ? '#cfcfcf'
        : undefined;
      this.chart.options.scales!['y']!.ticks!.color = isDark
        ? '#cfcfcf'
        : undefined;
      this.chart.options.plugins!.title!.color = isDark ? '#cfcfcf' : undefined;
      this.chart.options.plugins!.subtitle!.color = isDark
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
  }
}
