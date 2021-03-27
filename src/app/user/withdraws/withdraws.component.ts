import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.scss']
})
export class WithdrawsComponent implements OnInit {
  withdraws: any;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getwithdrawHistory().subscribe((data: any) => {
     this.withdraws = data['data']; 
     console.log(this.withdraws);
    }, err => {
      console.log(err);
    })
  }

}
