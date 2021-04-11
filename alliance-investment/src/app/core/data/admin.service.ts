import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
const url =   "https://allianceapi.herokuapp.com/api/v1";

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
}
