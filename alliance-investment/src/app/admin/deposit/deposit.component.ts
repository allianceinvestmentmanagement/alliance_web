import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
   deposits: any;
  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this._adminService.getDeposits().subscribe((data: any) => {
     this.deposits = data['data'];
     console.log(this.deposits)
    })
  }

}