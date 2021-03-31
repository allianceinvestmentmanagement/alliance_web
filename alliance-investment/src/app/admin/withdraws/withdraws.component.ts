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
      console.log(data);
      this.withdraws = data['data'];
    })
  }

}
