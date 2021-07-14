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
import { NotifierModule, NotifierOptions} from 'angular-notifier';
import { AddUserComponent } from './users/add-user/add-user.component';
import { StatSettingsComponent } from './settings/stat-settings/stat-settings.component';

/**
 * Custom angular notifier options
 */
 const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [DashboardComponent, AdminComponent, UsersComponent, WithdrawsComponent, DepositComponent, MessagesComponent, SettingsComponent, InvestmentComponent, AddUserComponent, StatSettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ]
})
export class AdminModule { }
