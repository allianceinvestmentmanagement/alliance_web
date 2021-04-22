import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url = "http://localhost:3000/api/v1";
// "https://allianceapi.herokuapp.com/api/v1";  
// 
//  
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  // Function To login
  signup(body: any) {
    return this._http.post(`${url}/register`, body,  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  // Function To login
  login(body: any) {
    return this._http.post(`${url}/login`, body,  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
    // Function to get User Details
    getUserInfo(){
      return this._http.get(`${url}/userInfo`,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.getToken()
        })
      });
    }
    update(body: any){
      return this._http.post(`${url}/updateuserinfo`, body,  {
        observe: 'body',    
        headers:  new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.getToken()
        })
      });
    }
   // Function To drop
   message(body: any) {
    return this._http.post(`${url}/user/message`, body,  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
    //  Function to set  Token
   setToken(user_encyrpt: string){
        localStorage.setItem('secret', user_encyrpt);
     }
   //  Function to get  Token
   getToken() {
    return  localStorage.getItem('secret');
  }
   //  Function to delete Token
   deleteToken(){
    return localStorage.removeItem('secret');
   }
    // Function to get User Payload
    getUserPayLoad(){
      let secret = this.getToken();

      if (secret) {
        let userPayLoad = atob(secret.split('.')[1]);
        return JSON.parse(userPayLoad)
      } else {
        return null;
      }
    }
    // Function to checek if User is logged In
    isLoggedIn() {
      let userPayLoad = this.getUserPayLoad();

      if (userPayLoad) {
        return userPayLoad;
        // .exp > Date.now() / 1000
      } else {
        return false;
      }
    }
}
