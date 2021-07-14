import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.scss']
})
export class WithdrawsComponent implements OnInit {
  withdraws: any;
  constructor(private _adminService: AdminService,private notifier: NotifierService,) { }

  ngOnInit(): void {
    this._adminService.getWithdraws().subscribe((data: any) => {
      this.withdraws = data['data'];
    })
  }

  rejected(item: any) {
    this._adminService.cancel_withdraw(item).subscribe(data => {
      this.notifier.notify( 'success', `${data['message']}` );
     }, err => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
     })
  }
  approve(item: any) {
    this._adminService.approve_withdraw(item).subscribe(data => {
     this.notifier.notify( 'success', `${data['message']}` ); 
     }, err => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
     })
  }
  // Function to delete user withdraw
  delete(id: any) {
    this._adminService.deleteWithdraw(id).subscribe((data: any) => {
     this.notifier.notify( 'success', `${data['message']}` );
     window.location.reload();
    }, err => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
    })
  }
}
