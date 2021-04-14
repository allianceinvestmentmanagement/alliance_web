import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  
  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this._adminService.getUsers().subscribe((data: any) => {
      this.users = data['data'];
    })
  }

}
