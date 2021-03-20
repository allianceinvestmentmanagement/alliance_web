import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { PricingComponent } from './pricing/pricing.component';
import { TermsComponent } from './terms/terms.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SupportComponent } from './support/support.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { RiskComponent } from './risk/risk.component';
import { InvestComponent } from './invest/invest.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    MainComponent,
    AboutComponent,
    MissionComponent,
    PricingComponent,
    TermsComponent,
    FaqsComponent,
    SupportComponent,
    PrivacyComponent,
    ContactComponent,
    RiskComponent,
    InvestComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
