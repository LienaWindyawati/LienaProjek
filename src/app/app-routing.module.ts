import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './folder1/forgot/forgot.component';
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
