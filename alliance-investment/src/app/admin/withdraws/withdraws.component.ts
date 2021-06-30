import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.scss']
})
export class WithdrawsComponent implements OnInit {
  withdraws: any;
  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this._adminService.getWithdraws().subscribe((data: any) => {
      this.withdraws = data['data'];
      console.log(data);
    })
  }

  rejected(item: any) {
    this._adminService.cancel_withdraw(item).subscribe(data => {
      alert(`${data['message']}`); 
     }, err => {
      alert(`${err['error']['message']}`); 
     })
  }
  approve(item: any) {
    this._adminService.approve_withdraw(item).subscribe(data => {
      alert(`${data['message']}`); 
     }, err => {
      alert(`${err['error']['message']}`); 
     })
  }
  // Function to delete user withdraw
  delete(id: any) {
    this._adminService.deleteWithdraw(id).subscribe((data: any) => {
      alert(`${data['message']}`);
     window.location.reload();
    }, err => {
      alert(`${err['error']}`);
      console.log(err);
    })
  }

}
