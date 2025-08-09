import {
  CommonModule,
  NgClass,
  NgComponentOutlet,
  NgFor,
} from '@angular/common';
import { Component, Type } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IconBudgetsComponent } from '../../icons/icon-budgets.component';
import { IconOverviewComponent } from '../../icons/icon-overview.component';
import { IconPotsComponent } from '../../icons/icon-pots.component';
import { IconRecurringBillsComponent } from '../../icons/icon-recurring-bills.component';
import { IconTransactionsComponent } from '../../icons/icon-transactions.component';

@Component({
  selector: 'app-sidebar-mobile',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterModule,
    NgClass,
    NgComponentOutlet,
    CommonModule,
  ],
  templateUrl: './sidebar-mobile.component.html',
})
export class SidebarMobileComponent {
  sidebarItems = [
    {
      label: 'Overview',
      icon: 'icon-nav-overview',
      route: '/overview',
    },
    {
      label: 'Transactions',
      icon: 'icon-nav-transactions',
      route: '/transactions',
    },
    {
      label: 'Budgets',
      icon: 'icon-nav-budgets',
      route: '/budgets',
    },
    {
      label: 'Pots',
      icon: 'icon-nav-pots',
      route: '/pots',
    },
    {
      label: 'Recurring Bills',
      icon: 'icon-nav-recurring-bills',
      route: '/recurring-bills',
    },
  ];
  iconRegistry: Record<string, Type<any>> = {
    'icon-nav-overview': IconOverviewComponent,
    'icon-nav-transactions': IconTransactionsComponent,
    'icon-nav-budgets': IconBudgetsComponent,
    'icon-nav-pots': IconPotsComponent,
    'icon-nav-recurring-bills': IconRecurringBillsComponent,
  };
}
