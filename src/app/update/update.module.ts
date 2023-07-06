import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { EditstudentdataComponent } from './editstudentdata/editstudentdata.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditstudentdataComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class UpdateModule { }
