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
}
