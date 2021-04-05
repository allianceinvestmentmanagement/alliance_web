import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {
  investments: any;

 
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getHistory();
  }
  getHistory() {
    this._userService.getInvests().subscribe((data: any) => {
      this.investments = data['data'];
    }, err => {
      console.log(err);
    })
  }

}
