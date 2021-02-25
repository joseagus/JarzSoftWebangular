import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ContacComponent } from './pages/contac/contac.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'contac',
    component: ContacComponent
  }
  ,
  {
    path:'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
