import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentsComponent } from './investments/investments.component';
import { NewInvestComponent } from './new-invest/new-invest.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserComponent } from './user.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletsComponent } from './wallets/wallets.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WithdrawsComponent } from './withdraws/withdraws.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'wallets',
        component: WalletsComponent
      },
      {
        path: 'withdraw',
        component: WithdrawComponent
      },
      {
        path: 'withdraws',
        component: WithdrawsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'new-invest',
        component: NewInvestComponent
      },
      {
        path: 'invest-history',
        component: InvestmentsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
