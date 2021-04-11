import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/data/auth.service';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    $(document).ready(function(){
        $("button").click(function(){
          if($("button").text() == "☰"){
          $("button").text("🞬");
          }else{
          $("button").text("☰");
          }
          
          $("li").toggle("slow");
        });  
		});
  }
//  Function to logout 
   logout() {
    this._authService.deleteToken();
    this._router.navigate(['/login']);  
  }
  home() {
    this._router.navigate(['/']).then(() => {
      window.location.reload();
   })  
  }
    // logout section
    dashboard() {
      this._router.navigate(['/panel/admin']).then(() => {
        window.location.reload();
     })  
    }
    users() {
      this._router.navigate(['/panel/admin/users']).then(() => {
        window.location.reload();
     })  
    }
    deposit() {
      this._router.navigate(['/panel/admin/deposits']).then(() => {
        window.location.reload();
     })  
    }
    withdraw() {
      this._router.navigate(['/panel/admin/withdraws']).then(() => {
        window.location.reload();
     })  
    }
    message() {
      this._router.navigate(['/panel/admin/messages']).then(() => {
        window.location.reload();
     })  
    }
    
}
