import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
const url = "https://allianceapi.herokuapp.com/api/v1";
//  "https://allianceapi.herokuapp.com/api/v1"
  // "https://allianceapi.herokuapp.com/api/v1";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

   // Function to get User funding history
   getUserInfo(){
    return this._http.get(`${url}/userInfo`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
  // Referral code
  getReferralCode(){
    return this._http.get(`${url}/getCode`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
  // Function to get wallet history
  getwalletHistory() {
    return this._http.get(`${url}/user/wallet_history`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
  // Function to capture notifications
  getNotifications() {
    return this._http.get(`${url}/user/notifications`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
  // Request For withdraw
  requestWithdraw(body: any) {
    return this._http.post(`${url}/user/withdraw`, body,  {
      observe: 'body',
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
       'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
   // Function to get wallet history
   getwithdrawHistory() {
    return this._http.get(`${url}/user/withdraw_list`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
  // Function to get the total withdraw
    getTotalWithdraw() {
      return this._http.get(`${url}/user/total_withdraw`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
  // Function to get total ddeposit
  getTotalDeposit() {
      return this._http.get(`${url}/user/total_deposit`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
  }
  // Investment profit
  getTotalInvestmentProfit() {
    return this._http.get(`${url}/user/total_investment_profit`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
}
  // Function to invest
    invest(body: any) {
      return this._http.post(`${url}/user/invest`, body,  {
        observe: 'body',
        headers: new HttpHeaders({
          'Content-Type': 'application/json', 
         'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
   // Function to get list of invests
  getInvests() {
    return this._http.get(`${url}/user/invest`,   {
      observe: 'body',
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
       'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  }
}
