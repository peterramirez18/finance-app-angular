import {
  CommonModule,
  NgClass,
  NgComponentOutlet,
  NgFor,
} from '@angular/common';
import { Component, signal, Type } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IconOverviewComponent } from '../../icons/icon-overview.component';
import { IconTransactionsComponent } from '../../icons/icon-transactions.component';
import { IconBudgetsComponent } from '../../icons/icon-budgets.component';
import { IconPotsComponent } from '../../icons/icon-pots.component';
import { IconRecurringBillsComponent } from '../../icons/icon-recurring-bills.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterModule,
    NgClass,
    NgComponentOutlet,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('toggleWidth', [
      state('expanded', style({ width: '240px' })),
      state('collapsed', style({ width: '80px' })),
      transition(
        'expanded <=> collapsed',
        animate('220ms cubic-bezier(.2,.8,.2,1)')
      ),
    ]),

    trigger('rotate', [
      state('expanded', style({ transform: 'rotate(0deg)' })),
      state('collapsed', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed', animate('180ms ease')),
    ]),
  ],
})
export class SidebarComponent {
  // state
  minimized = signal(false);

  toggle() {
    this.minimized.update((value) => !value);
  }

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
