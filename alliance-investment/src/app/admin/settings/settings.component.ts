import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AdminService } from 'src/app/core/data/admin.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  walletForm: FormGroup = this.formBuilder.group({
    wallet_token: new FormControl('', Validators.compose([
              Validators.required,
      ]))
  });
  selectWallet: any;
  constructor(public formBuilder: FormBuilder,private notifier: NotifierService, private _adminService: AdminService) { }

  ngOnInit(): void {
  }
  pay_btc_modal(item: any) {
    this.selectWallet = item;
    
  }

  pay_ethereum_modal(item: any) {
    this.selectWallet = item;
  }

  pay_payeer_modal(item: any) {
    this.selectWallet = item;
  }

  pay_perfect_modal(item: any) {
    this.selectWallet = item;
  }

  pay_cash_modal(item: any) {
    this.selectWallet = item;
  }
  submit(data: any) {
    const model = {
      wallet_token: data.wallet_token,
      wallet_name: this.selectWallet
    };
   this._adminService.wallet_update(model).subscribe((data) => {
     this.notifier.notify( 'success', `${data['message']}` );
   }, err =>  {
     this.notifier.notify( 'error', `${err['error']['message']}` );
   })
  }
}
