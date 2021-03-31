import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/data/admin.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  message: any;

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this._adminService.getMessages().subscribe((data: any) => {
      this.message = data['data'];
      console.log(this.message);
    })
  }

}
