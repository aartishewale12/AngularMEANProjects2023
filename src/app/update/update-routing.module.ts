import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstudentdataComponent } from './editstudentdata/editstudentdata.component';

const routes: Routes =  [{path:'',component:EditstudentdataComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
