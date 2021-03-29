import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/data/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  contactForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    subject: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    phone_number: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    name: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    message: new FormControl('', Validators.compose([
      Validators.required,
    ])),
  });

  errMessage: any;
  successMessage: any;
  constructor(
      private _authService: AuthService,
      public formBuilder: FormBuilder,
      private _router: Router
  ) { }

  ngOnInit(): void {}
  
  // Function to message the platform
  // Function to login
message = async (data: any) => {
  console.log(data);
  await  this._authService.message(data).subscribe(res => {
      this.contactForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
}

}
