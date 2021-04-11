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
    })
  }

  rejected(item: any) {
    this._adminService.cancel_withdraw(item).subscribe(data => {
      console.log(data);
     }, err => {
       console.log(err);
     })
  }
  approve(item: any) {
    this._adminService.approve_withdraw(item).subscribe(data => {
      console.log(data);
     }, err => {
       console.log(err);
     })
  }

}
