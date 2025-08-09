import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./pages/transactions/transactions.component').then(
        (m) => m.TransactionsComponent
      ),
  },
  {
    path: 'budgets',
    loadComponent: () =>
      import('./pages/budgets/budgets.component').then(
        (m) => m.BudgetsComponent
      ),
  },
  {
    path: 'pots',
    loadComponent: () =>
      import('./pages/pots/pots.component').then((m) => m.PotsComponent),
  },
  {
    path: 'recurring-bills',
    loadComponent: () =>
      import('./pages/recurring-bills/recurring-bills.component').then(
        (m) => m.RecurringBillsComponent
      ),
  },
];
