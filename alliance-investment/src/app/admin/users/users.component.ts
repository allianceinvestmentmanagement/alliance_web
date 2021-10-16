import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AdminService } from 'src/app/core/data/admin.service';
import { AuthService } from 'src/app/core/data/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  referrals: any;

  selectedUserDetails: any;
  userData: any;
  constructor(
    private _adminService: AdminService,
    private notifier: NotifierService,
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this._adminService.getUsers().subscribe((data: any) => {
      this.users = data['data'];
    })
  }
  // Function to delete user
  delete(id: any) { 
    this._adminService.deleteUser(id).subscribe((data: any) => {
      this.notifier.notify( 'success', `${data['message']}` );
     window.location.reload();
    }, err => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
    })
  }

  // view user downline users
  view(username: any) {
    this._authService.getMyReferrals(username).subscribe((data: any) => {
      this.referrals = data['data'];
    })
  }
  // Function to view user details
  viewUser(item: any) {
    console.log('data re oo', item);
    this.selectedUserDetails = item;
  }
  // Function to login as the selected user
  LoginToUserAccount() {
    console.log('user re oo', this.selectedUserDetails);
    let payload = {
      email: this.selectedUserDetails['email']
    }
    this._authService.adminLoginAs(payload).subscribe((data: any) => {
     console.log('Na details be this', data);
     this.userData = data['userdetails']
     let payload = {
       _id: this.userData['_id']
     }
     console.log('payload re naw', payload);
     this.loginUser(payload);
    })
  }
  // Login funct
  loginUser = async (form) => {
    await  this._authService.LoginAs(form).subscribe(res => {
          this._authService.setToken(res['token']); 
          alert('successfully login now!');
          // if(res['role'] === 'user') {
            this._router.navigate(['/user']);
          // }  
        },
        (err) => {
          alert(`${err['error']['message']}`)
        }
      );
  }
}
