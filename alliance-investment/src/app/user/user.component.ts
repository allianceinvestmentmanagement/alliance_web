import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/data/auth.service';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userdetail: any;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.getUserInfo().subscribe((data: any) => {
      this.userdetail = data['user'];
    })
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

   // logout section
   logout() {
    this._authService.deleteToken();
    this._router.navigate(['/login']);  
  }

  home() {
    this._router.navigate(['/']).then(() => {
       window.location.reload();
    })
  }

  dashboard() {
    this._router.navigate(['/user']).then(() => {
       window.location.reload();
    })
  }

  fund() {
    this._router.navigate(['/user/withdraw']).then(() => {
       window.location.reload();
    })
  }

  funds() {
    this._router.navigate(['/user/withdraws']).then(() => {
       window.location.reload();
    })
  }

  wallet() {
    this._router.navigate(['/user/wallet']).then(() => {
       window.location.reload();
    })
  }

  wallets() {
    this._router.navigate(['/user/wallets']).then(() => {
       window.location.reload();
    })
  }

  new() {
    this._router.navigate(['/user/new-invest']).then(() => {
       window.location.reload();
    })
  }

  news() {
    this._router.navigate(['/user/invest-history']).then(() => {
       window.location.reload();
    })
  }

  profile() {
    this._router.navigate(['/user/profile']).then(() => {
       window.location.reload();
    })
  }

  recent() {
    this._router.navigate(['/user/recent']).then(() => {
       window.location.reload();
    })
  }
  password() {
    this._router.navigate(['/user/password']).then(() => {
       window.location.reload();
    })
  }
}
