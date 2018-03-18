import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenService } from './authen.service';
import {DashboardModule} from "./dashboard/dashboard.module";
import {AppRouterModule} from "./approutes/approutes.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [AuthenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
