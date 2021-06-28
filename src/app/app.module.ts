import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './folder1/login/login.component';
import { RegisterComponent } from './folder1/register/register.component';
import { ForgotComponent } from './folder1/forgot/forgot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './material/material';
import { StartComponent } from './folder1/start/start.component';
import { DashboardComponent } from './folder1/dashboard/dashboard.component';
import { DataclientComponent } from './folder1/dataclient/dataclient.component';
import { InputclientComponent } from './folder1/inputclient/inputclient.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    StartComponent,
    DashboardComponent,
    DataclientComponent,
    InputclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
