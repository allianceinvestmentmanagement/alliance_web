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
}
