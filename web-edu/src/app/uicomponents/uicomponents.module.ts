import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGridComponent } from './list-grid/list-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ListGridComponent
  ],
  exports:[
      ListGridComponent
  ]
})
export class UicomponentsModule { }
