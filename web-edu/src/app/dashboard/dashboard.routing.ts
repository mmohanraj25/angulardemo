import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashBoardComponent} from "./dash-board.component";
import {ListGridComponent} from "../uicomponents/list-grid/list-grid.component";

export const dashboardRoutes = [
    {
        path: 'dashboard', children: [
            {path:'', component: DashBoardComponent},
            {path:'resourceEdit', component: ListGridComponent}
        ],
    },

];
export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);