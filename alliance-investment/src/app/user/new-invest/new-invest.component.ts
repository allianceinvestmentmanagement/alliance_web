import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-new-invest',
  templateUrl: './new-invest.component.html',
  styleUrls: ['./new-invest.component.scss']
})
export class NewInvestComponent implements OnInit {
  selected_package: any;
  investForm: FormGroup = this.formBuilder.group({
    amount: new FormControl('', Validators.compose([
              Validators.required,
      ]))
});
  constructor(
    private _userService: UserService,
    public formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  // Investment selected function
  investment_selected(selection: any) {
      this.selected_package = selection;
  }
  submit(data: any) {
     if(this.selected_package === 'Basic') {
      let body = {
        amount: data.amount,
        selected_package: this.selected_package,
        roi_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
      console.log(body)
      this._userService.invest(body).subscribe((data: any) => {
        console.log(data);
      }, err => {
        console.log(err);
      })
     } else if(this.selected_package === 'Standard') {
      let body = {
        amount: data.amount,
        selected_package: this.selected_package,
        roi_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
      }
      this._userService.invest(body).subscribe((data: any) => {
        console.log(data);
      }, err => {
        console.log(err);
      })
     } else if(this.selected_package === 'Premium') {
      let body = {
        amount: data.amount,
        selected_package: this.selected_package,
        roi_date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
      }
      this._userService.invest(body).subscribe((data: any) => {
        console.log(data);
      }, err => {
        console.log(err);
      })
     }  else if(this.selected_package === ' Plantium') {
      let body = {
        amount: data.amount,
        selected_package: this.selected_package,
        roi_date: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
      }
      this._userService.invest(body).subscribe((data: any) => {
        alert(`${data['message']}`);
      }, err => {
        console.log(err);
        alert(`${err['error']['message']}`);
      })
     }  else {

     }
  }

}
