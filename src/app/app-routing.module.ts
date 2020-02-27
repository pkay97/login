import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoginActivate } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
