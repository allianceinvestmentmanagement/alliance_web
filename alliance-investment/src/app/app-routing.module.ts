import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/guard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  { path: 'user', canActivate: [AuthGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'panel/admin', canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
