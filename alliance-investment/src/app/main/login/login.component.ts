import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { authModel } from 'src/app/core/models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password: new FormControl('', Validators.compose([
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
      private _router: Router) { }

  ngOnInit(): void {
  }
// Function to login
loginUser = async (form: authModel) => {
  await  this._authService.login(form).subscribe(res => {
        this._authService.setToken(res['token']); 
        alert('successfully login now!');
        if(res['role'] === 'user') {
          this._router.navigate(['/user']);
        } else if (res['role'] === 'admin') {
          this._router.navigate(['/panel/admin']);
      }  else {
        this._router.navigate(['/login']);
      }  
      },
      (err) => {
        alert(`${err['error']['message']}`)
      }
    );
}
}
