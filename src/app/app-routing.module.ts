import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
   {path: 'registartion',loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)},
{path: 'studentdata',loadChildren: () => import('./studentdata/studentdata.module').then(m => m.StudentdataModule)},
{path: 'update',loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



