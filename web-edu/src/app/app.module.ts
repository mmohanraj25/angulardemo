import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenService } from './authen.service';
import { DashboardComponent } from './dashboard/dashboard.component';

let appRoutes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthenService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
