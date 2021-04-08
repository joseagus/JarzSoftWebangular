import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ContacComponent } from './pages/contac/contac.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EvolutionComponent } from './pages/evolution/evolution.component';


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
    path:'nosotros',
    component: NosotrosComponent
  }
  ,
  {
    path:'evolution',
    component: EvolutionComponent
  }
  ,
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
