import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.scss']
})
export class WithdrawsComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getwithdrawHistory().subscribe((data: any) => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
