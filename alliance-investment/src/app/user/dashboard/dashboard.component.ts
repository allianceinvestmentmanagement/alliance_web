import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/core/data/auth.service';
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
  totalinvestmentProfit: any;
  username: any;
  referrals: any;
  investments: any;

  constructor(private _userService: UserService,private _authService: AuthService, private loc: Location) { }

  ngOnInit(): void {
    this._authService.getUserInfo().subscribe((data: any) => {
      this.username = data['user']['username'];
    })
     this.getHistory();
    const angularRoute = this.loc.path();
    const url = window.location.href;
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
    // const getInvestmentProfit$ = this._userService.getTotalInvestmentProfit();
    // getInvestmentProfit$.subscribe((res: any) => {
    //     this.totalinvestmentProfit = res.result;
    //     console.log(res);
    // }, error => {
    //   console.log(error);
    // })
    const referralCode$ = this._userService.getReferralCode();
       referralCode$.subscribe((res: any) => { 
      this.referralCodes  =  "https://www.allianceinvestmanagement.com/register/" + res?.user[0].userid['username'];
    }, error => {
    })
    setTimeout(() => this.getReferrals(), 1000);
   
  }
  getHistory() {
    this._userService.getInvests().subscribe((data: any) => {
      this.investments = data['data'];
      let sum = this.investments.reduce((sum,a)=>{
        return sum + a.invest_profit;
      },0);
      console.log(sum); 
      this.totalinvestmentProfit = sum;
    }, err => {
      console.log(err);
    })
  }
  getReferrals() {
    this._authService.getMyReferrals(this.username).subscribe((data: any) => {
      this.referrals = data['data'];
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
