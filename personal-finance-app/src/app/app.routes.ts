import { Routes } from '@angular/router';
import { FxfDashboardComponent } from './pages/fxf-dashboard/fxf-dashboard.component';
import { FxfTransactionsComponent } from './pages/fxf-transactions/fxf-transactions.component';

export const routes: Routes = [
  {
    path: 'transactions',
    title: 'Transactions',
    component: FxfTransactionsComponent,
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: FxfDashboardComponent,
  },
];
