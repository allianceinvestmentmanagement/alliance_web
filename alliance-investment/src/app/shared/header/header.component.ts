import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/data/auth.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userdetail: any;
  isEmpty: boolean = true;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._authService.getUserInfo().subscribe((data: any) => {
      this.userdetail = data['user'];
      console.log(this.userdetail);
      if(data.user['name'] && data.user['role'] != 'null'   ) {
        this. isEmpty = true;
      } else {
        this. isEmpty = false;

      }
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
  home() {
    this._router.navigate(['/']).then(() => {
      window.location.reload();
   })  
  }
   // logout section
   logout() {
    this._authService.deleteToken();
    this._router.navigate(['/login']);  
  }
  about() {
    this._router.navigate(['/about']).then(() => {
       window.location.reload();
    })
  }
  
  faq() {
    this._router.navigate(['/faq']).then(() => {
       window.location.reload();
    });
  }
  pricing() {
    this._router.navigate(['/pricing']).then(() => {
       window.location.reload();
    });
  }
  support() {
    this._router.navigate(['/support']).then(() => {
       window.location.reload();
    });
  }
  contact() {
    this._router.navigate(['/contact']).then(() => {
       window.location.reload();
    });
  }
  login() {
    this._router.navigate(['/login']).then(() => {
       window.location.reload();
    });
  }
  register() {
    this._router.navigate(['/register']).then(() => {
       window.location.reload();
    });
  }
  dashboard() {
    this._router.navigate(['/user']).then(() => {
       window.location.reload();
    });
  }
}
