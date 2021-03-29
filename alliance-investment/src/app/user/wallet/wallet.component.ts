import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
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
                            deposited_proof:''
  });
  deposited_proof: any = []; 
  errorMessage: string;
  errMessage: any;
  successMessage: any;
  file: File;
  constructor(
      private _userService: UserService,
      public formBuilder: FormBuilder,
      private _router: Router,
      private _authService: AuthService,
      private http: HttpClient
      ) { }


  ngOnInit(): void {
  }
  // File uplaod function
  handleFileUpload(e) {
    for (var i = 0; i < e.target.files.length; i++) {  
      this.deposited_proof.push(e.target.files[i]); 
    } 
  }

  // Section to pay
  submit(data: any) {
      const myFormData = new FormData();
      const  httpOptions  = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
        })
      }
      // Object declaration
      const model = {
        deposited_amount: this.walletForm.value.deposited_amount,
        depositor_source: this.walletForm.value.depositor_source,
        depositor_message: this.walletForm.value.depositor_message,
      };
      myFormData.append('deposited_amount', model.deposited_amount);
      myFormData.append('depositor_source',  model.depositor_source);
      myFormData.append('depositor_message', model.depositor_message);
      // for (var i = 0; i < this.deposited_proof.length; i++) {  
        myFormData.append('deposited_proof', this.deposited_proof);
      // } 
      console.log(data);
      this.http.post('https://allianceapi.herokuapp.com/api/v1/user/deposit', myFormData , httpOptions )
      .subscribe(data => {
        console.log(data);
      }, err => {
       console.log(err);
      })
  }
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
