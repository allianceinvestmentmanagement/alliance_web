import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  walletHistory: any;
  wallets: any;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    this.getHistory();
  }
  getHistory() {
    this._userService.getwalletHistory().subscribe((data: any) => {
      console.log(data);
      this.wallets = data['data'];
    }, err => {
      console.log(err);
    })
  }
}
