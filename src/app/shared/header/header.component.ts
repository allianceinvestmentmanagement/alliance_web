import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/data/auth.service';

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
  }
  
}
