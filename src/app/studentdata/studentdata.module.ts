import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdataRoutingModule } from './studentdata-routing.module';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


@NgModule({
  declarations: [
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    StudentdataRoutingModule
  ]
})
export class StudentdataModule { }
