import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  walletHistory: any;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    // const getAllWalletHistory$ = this._userService.getwalletHistory();
    // getAllWalletHistory$.subscribe((res: any) => {
    //     this.walletHistory = res.data;
    //     console.log(this.walletHistory);
    // }, error => {
    //   console.log(error);
    // })
    this.getHistory();
  }
  getHistory() {
    this._userService.getwalletHistory().subscribe((data: any) => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
}
