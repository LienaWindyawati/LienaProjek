import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './folder1/forgot/forgot.component';
import { LoginComponent } from './folder1/login/login.component';
import { RegisterComponent } from './folder1/register/register.component';

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
  path:'',
  pathMatch:'full',
  redirectTo:'/login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
