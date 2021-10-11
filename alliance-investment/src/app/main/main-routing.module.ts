import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { IndexComponent } from './index/index.component';
import { InvestComponent } from './invest/invest.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main.component';
import { MissionComponent } from './mission/mission.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterLinkComponent } from './register-link/register-link.component';
import { RegisterComponent } from './register/register.component';
import { RiskComponent } from './risk/risk.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'mission',
        component: MissionComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'faq',
        component: FaqsComponent
      },
      // {
      //   path: 'support',
      //   component: SupportComponent
      // },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'risk',
        component: RiskComponent
      },
      {
        path: 'invest',
        component: InvestComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forget',
        component: ForgetPasswordComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register/:token',
        component: RegisterLinkComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
