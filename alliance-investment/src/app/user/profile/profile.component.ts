import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/data/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    name: new FormControl('', Validators.compose([
      Validators.required
    ])),
    phone_number: new FormControl('', Validators.compose([
      Validators.required
    ])),
    username: new FormControl('', Validators.compose([
      Validators.required
    ])),

  });
  userdetail: any;
  isEmpty: boolean;

  constructor(private _authService: AuthService,  public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this._authService.getUserInfo().subscribe((data: any) => {
      this.userdetail = data['user'];
      this.registerForm.patchValue(this.userdetail);
      if(data.user['name'] && data.user['role'] != 'null'   ) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
      })
  }

  update = async(data: any) => {
    let update = {
      username: data['username'],
      phone_number: data['phone_number']
    }
    await  this._authService.update(update).subscribe(res => {
      alert(`${res['message']}`)
    },
    (err) => {
     alert(`${err['error']['message']}`)
    }
  );
  } 

}
