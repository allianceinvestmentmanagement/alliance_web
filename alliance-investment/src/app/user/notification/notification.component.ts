import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/data/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationHistory: any;
  wallets: any;
  notifications: any;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    this.getNotification();
  }
  getNotification() {
    this._userService.getNotifications().subscribe((data: any) => {
      console.log(data);
      this.notifications = data['data'];
    }, err => {
      console.log(err);
    })
  }

}
