import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UicomponentsModule} from "../uicomponents/uicomponents.module";
import {DashBoardComponent} from './dash-board.component';
import {dashboardRouting} from "./dashboard.routing";


@NgModule({
  imports: [
    CommonModule,
    UicomponentsModule,
    dashboardRouting
  ],
  declarations: [DashBoardComponent],

})
export class DashboardModule { }
