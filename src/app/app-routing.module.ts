import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './folder1/dashboard/dashboard.component';
import { DataclientComponent } from './folder1/dataclient/dataclient.component';
import { ForgotComponent } from './folder1/forgot/forgot.component';
import { InputclientComponent } from './folder1/inputclient/inputclient.component';
import { LoginComponent } from './folder1/login/login.component';
import { RegisterComponent } from './folder1/register/register.component';
import { StartComponent } from './folder1/start/start.component';

const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'forgot',
  component:ForgotComponent
},
{
  path:'start',
  component:StartComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'dataclient',
  component: DataclientComponent
},
{
  path:'inputclient',
  component: InputclientComponent
},
{
  path:'',
  pathMatch:'full',
  redirectTo:'/start'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
