import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalwithdraw: any;
  totaldeposit: any;
  referralCodes: any;
  textMessage: any;
  msgHideAndShow:boolean=false;  

  constructor(private _userService: UserService, private loc: Location) { }

  ngOnInit(): void {
    const angularRoute = this.loc.path();
    const url = window.location.href;
    console.log(angularRoute);
  
    console.log(window.location.href);
    const getTotalWithdraw$ = this._userService.getTotalWithdraw();
    getTotalWithdraw$.subscribe((res: any) => {
        this.totalwithdraw = res.result;
    }, error => {
    })
    const getTotalDeposit$ = this._userService.getTotalDeposit();
    getTotalDeposit$.subscribe((res: any) => {
        this.totaldeposit = res.result;
    }, error => {
    })
    const referralCode$ = this._userService.getReferralCode();
       referralCode$.subscribe((res: any) => {
      this.referralCodes  =  "https://www.allianceinvestmanagement.com/register/" + res.user.referral_code;
    }, error => {
    })
  }
  textMessageFunc(msgText){  
        this.textMessage=msgText+" Copied to Clipboard";  
        this.msgHideAndShow=true;  
        setTimeout(() => {  
          this.textMessage="";  
          this.msgHideAndShow=false;  
        }, 1000);  
      } 
  copyInputMessage(inputElement) {  
        inputElement.select();  
        document.execCommand('copy');  
        inputElement.setSelectionRange(0, 0);  
          this.textMessageFunc('Text');    
      }  
}
