import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { userModel } from 'src/app/core/models/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      private _router: Router
      ) { }

  ngOnInit(): void {
  }
  // Function to register
  register = async(form: userModel) => {
    await  this._authService.register(form).subscribe(res => {
      alert('successfully login now!');
      this._router.navigate(['/login']);
    },
    (err) => {
      alert(`${err['error']['message']}`)
    }
  );
  } 
}
