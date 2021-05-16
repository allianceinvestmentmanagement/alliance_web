import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/data/admin.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})

export class InvestmentComponent implements OnInit {
  investment: any;
  selected_investor: any;
  investForm: FormGroup = this.formBuilder.group({
    invest_profit: new FormControl('', Validators.compose([
              Validators.required,
      ]))
  });

  constructor(public formBuilder: FormBuilder, private _adminService: AdminService) { }
  ngOnInit(): void {
    this._adminService.getInvestment().subscribe((data: any) => {
      this.investment = data['data'];
    })
  }
  credit(item: any) {
    this.selected_investor = item;
  }
  submit(data: any) {
    const model = {
      invest_profit: data.invest_profit,
    };
    console.log(this.selected_investor['_id'], model);
   this._adminService.fund_investment(this.selected_investor['_id'], model).subscribe((data) => {
     alert(`${data['message']}`)
   }, err =>  {
     alert(`${err['error']['message']}`)
   })
  }
  // Function to delete investment
  delete(id: any) {
    this._adminService.deleteInvestment(id).subscribe((data: any) => {
      alert(`${data['message']}`);
     window.location.reload();
    }, err => {
      alert(`${err['error']}`);
      console.log(err);
    })
  }
}
