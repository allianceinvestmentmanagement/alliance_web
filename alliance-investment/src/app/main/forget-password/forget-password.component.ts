import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', Validators.compose([
      Validators.required
    ]))
  });
  errorMessage: string;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
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
forget = async (form) => {
  await  this._authService.login(this.forgetForm.value).subscribe(res => {
        this._authService.setToken(res['token']); 
        alert('Check your registered email address');
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
