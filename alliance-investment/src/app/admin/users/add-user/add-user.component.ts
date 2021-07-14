import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { userModel } from 'src/app/core/models/model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    name: new FormControl('', Validators.compose([
      Validators.required
    ])),
    referral_code: new FormControl('', Validators.compose([
      Validators.required
    ])),
    phone_number: new FormControl('', Validators.compose([
      Validators.required
    ])),
    username: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    c_password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
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
      private _authService: AuthService,
      public formBuilder: FormBuilder,
      private _router: Router,
      private notifier: NotifierService,
      ) { }

  ngOnInit(): void {
  }
  // Function to register
  register = async(form: userModel) => {
    await  this._authService.signup(form).subscribe(res => {
      this.notifier.notify( 'success', 'You have successfully Register, Proceed to login now!' );
      this._router.navigate(['/panel/admin/users']);
    },
    (err) => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
    }
  );
  } 

}
