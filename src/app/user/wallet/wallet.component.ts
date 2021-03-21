import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  walletForm: FormGroup = this.formBuilder.group({
      deposited_amount: new FormControl('', Validators.compose([
                              Validators.required,
                      ])),
                             depositor_source: new FormControl('', Validators.compose([
                              Validators.required,
                            ])),
                             depositor_message: new FormControl('', Validators.compose([
                              Validators.required,
                            ])),
                          
                              deposit_proof:''
  });
  errorMessage: string;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  errMessage: any;
  successMessage: any;
  constructor(
      private _userService: UserService,
      public formBuilder: FormBuilder,
      private _router: Router
      ) { }



  ngOnInit(): void {
  }

  // Section to pay
  pay_btc_modal() {
    console.log('I want to pay with this platform.');
  }

  pay_ethereum_modal(){

  }

  pay_payeer_modal() {

  }

  pay_perfect_modal() {

  }

  pay_cash_modal() {

  }
}
