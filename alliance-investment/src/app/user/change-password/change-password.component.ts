import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup = this.formBuilder.group({
    old_password: new FormControl('', Validators.compose([
              Validators.required,
      ])),
      new_password: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    c_password: new FormControl('', Validators.compose([
      Validators.required,
    ]))
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
    this._authService.change_password(data).subscribe((data: any) => {
      console.log(data);
      this.passwordForm.reset();
      alert(`${data['message']}`)
      this._router.navigate(['/user/withdraws']);
    }, err => {
      console.log(err);
      alert(`${err['error']['message']}`)
    })
  }


}
