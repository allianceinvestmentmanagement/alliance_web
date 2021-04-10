import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';
import { userModel } from 'src/app/core/models/model';

@Component({
  selector: 'app-register-link',
  templateUrl: './register-link.component.html',
  styleUrls: ['./register-link.component.scss']
})
export class RegisterLinkComponent implements OnInit {
  errMessage: any;
  successMessage: any;
  token: string;

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

  registerForm: FormGroup;
  constructor(
      private _authService: AuthService,
      public formBuilder: FormBuilder,
      private _router: Router,
      private activatedRoute: ActivatedRoute
      ) { 
        this.token = this.activatedRoute.snapshot.paramMap.get('token');
        this.registerForm = new FormGroup({
          email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])),
          name: new FormControl('', Validators.compose([
            Validators.required
          ])),
          referral_code: new FormControl(this.token, Validators.compose([
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
        });
      }

  ngOnInit(): void {
  }
  // Function to register
  register = async(form: userModel) => {
    console.log(form);
    await  this._authService.regisetr(form).subscribe(res => {
      this._router.navigate(['/login']);
    },
    (err) => {
      console.log(err);
    }
  );
  } 

}
