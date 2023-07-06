import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationformComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class RegistrationModule { }
