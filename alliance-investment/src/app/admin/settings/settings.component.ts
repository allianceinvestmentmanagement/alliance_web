import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(public formBuilder: FormBuilder, private _adminService: AdminService) { }

  ngOnInit(): void {
  }
  pay_btc_modal(item: any) {
    this.selectWallet = item;
    console.log(this.selectWallet)
  }

  pay_ethereum_modal(item: any) {
    this.selectWallet = item;
    console.log(this.selectWallet)

  }

  pay_payeer_modal(item: any) {
    this.selectWallet = item;
    console.log(this.selectWallet)

  }

  pay_perfect_modal(item: any) {
    this.selectWallet = item;
    console.log(this.selectWallet)

  }

  pay_cash_modal(item: any) {
    this.selectWallet = item;
    console.log(this.selectWallet)

  }
  submit(data: any) {
    console.log(data);
    const model = {
      wallet_token: data.wallet_token,
      wallet_name: this.selectWallet
    };
   console.log(model);
   this._adminService.wallet_update(model).subscribe((data) => {
     alert(`${data['message']}`)
   }, err =>  {
     alert(`${err['error']['message']}`)
   })
  }
}
