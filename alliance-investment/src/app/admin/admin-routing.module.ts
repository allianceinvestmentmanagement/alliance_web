import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { InvestmentComponent } from './investment/investment.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatSettingsComponent } from './settings/stat-settings/stat-settings.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { WithdrawsComponent } from './withdraws/withdraws.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'deposits',
        component: DepositComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'new_user',
        component: AddUserComponent
      },
      {
        path: 'withdraws',
        component: WithdrawsComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'stat',
        component: StatSettingsComponent
      },
      {
        path: 'invest',
        component: InvestmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
