import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
const url = "https://allianceapi.herokuapp.com/api/v1"; 
// "http://localhost:3000/api/v1"; 
//  "https://allianceapi.herokuapp.com/api/v1";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

     // Function to get User 
     getUsers(){
      return this._http.get(`${url}/admin/users`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    deleteUser(id: any) {
      return this._http.delete(`${url}/admin/delete_user/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    deleteInvestment(id: any) {
      return this._http.delete(`${url}/admin/delete_investment/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    deleteWithdraw(id: any) {
      return this._http.delete(`${url}/admin/delete_withdraw/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    getDeposits(){
      return this._http.get(`${url}/admin/deposits`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    getWithdraws(){
      return this._http.get(`${url}/admin/withdraws`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    getMessages(){
      return this._http.get(`${url}/admin/messages`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    getInvestment(){
      return this._http.get(`${url}/admin/invests`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    fund_investment(id: any, body: any){
      return this._http.post(`${url}/admin/fund_investor/${id}`, body,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    approve_deposit(id: any){
      return this._http.get(`${url}/admin/approve_deposit/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    cancel_deposit(id: any){
      return this._http.get(`${url}/admin/cancel_deposit/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    delete_deposit(id: any){
      return this._http.get(`${url}/admin/delete_deposit/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    approve_withdraw(id: any){
      return this._http.get(`${url}/admin/approve_withdraw/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    cancel_withdraw(id: any){
      return this._http.get(`${url}/admin/cancel_withdraw/${id}`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
    wallet_update(body: any){
      return this._http.post(`${url}/admin/create_wallet`, body,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this._authService.getToken()
        })
      });
    }
}
