import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
   deposits: any;
  constructor(private _adminService: AdminService,    private notifier: NotifierService,) { }

  ngOnInit(): void {
    this._adminService.getDeposits().subscribe((data: any) => {
     this.deposits = data['data'];
    })
  }

  approve(item: any) {
     this._adminService.approve_deposit(item).subscribe(data => {
      this.notifier.notify( 'success', `${data['message']}` );
     }, err => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
     })
  }
  cancel(item: any) {
    this._adminService.cancel_deposit(item).subscribe(data => {
      this.notifier.notify( 'success', `${data['message']}` );
    },err => {
      console.log(err);
      this.notifier.notify( 'error', `${err['error']['message']}` );
    })
  }
  // Function to delete deposit
  delete(item: any) {
    this._adminService.delete_deposit(item).subscribe(data => {
      this.notifier.notify( 'success', `${data['message']}` );
    },err => {
      this.notifier.notify( 'error', `${err['error']['message']}` );
    })
  }
}
