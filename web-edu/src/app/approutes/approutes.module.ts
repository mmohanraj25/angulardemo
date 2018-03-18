import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "../dashboard/dash-board.component";
import {LoginComponent} from "../login/login.component";


const appRoutes: Routes =[
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: '**', component: LoginComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false }),//Debug purposes
  ],
  exports: [
  RouterModule
  ],
  declarations: [],
})
export class AppRouterModule { }


