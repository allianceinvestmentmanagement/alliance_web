import { Component, OnInit } from '@angular/core';
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

  
  constructor(private _adminService: AdminService, private notifier: NotifierService, private _authService: AuthService) { }

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
}
