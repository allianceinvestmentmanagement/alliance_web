import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  withdrawForm: FormGroup = this.formBuilder.group({
    amount: new FormControl('', Validators.compose([
              Validators.required,
      ])),
      token: new FormControl('', Validators.compose([
      Validators.required,
    ])),
     message: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    withdraw_method: new FormControl('', Validators.compose([
      Validators.required,
    ])),
});
deposited_proof: any = []; 
errorMessage: string;
errMessage: any;
successMessage: any;

  constructor(private _userService: UserService,
    public formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  // Function to submit data
  submit(data: any)  {
    this._userService.requestWithdraw(this.withdrawForm.value).subscribe((data: any) => {
      this.withdrawForm.reset();
      console.log(data);
      this._router.navigate(['/user/withdraws']);
    }, err => {
      console.log(err);
       console.log(err);
    })
  }

}
