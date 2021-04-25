import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './wallet/wallet.component';
import { WalletsComponent } from './wallets/wallets.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WithdrawsComponent } from './withdraws/withdraws.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewInvestComponent } from './new-invest/new-invest.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [UserComponent, DashboardComponent, WalletComponent, WalletsComponent, WithdrawComponent, WithdrawsComponent, TransactionsComponent, NewInvestComponent, InvestmentsComponent, ProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
