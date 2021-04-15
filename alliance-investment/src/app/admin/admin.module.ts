import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { WithdrawsComponent } from './withdraws/withdraws.component';
import { DepositComponent } from './deposit/deposit.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestmentComponent } from './investment/investment.component';


@NgModule({
  declarations: [DashboardComponent, AdminComponent, UsersComponent, WithdrawsComponent, DepositComponent, MessagesComponent, SettingsComponent, InvestmentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
