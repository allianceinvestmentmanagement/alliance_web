import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalwithdraw: any;
  totaldeposit: any;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    const getTotalWithdraw$ = this._userService.getTotalWithdraw();
    getTotalWithdraw$.subscribe((res: any) => {
        this.totalwithdraw = res.result;
    }, error => {
      console.log(error);
    })
    const getTotalDeposit$ = this._userService.getTotalDeposit();
    getTotalDeposit$.subscribe((res: any) => {
        this.totaldeposit = res.result;
    }, error => {
      console.log(error);
    })
  }

}
